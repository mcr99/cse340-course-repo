import db from "./db.js"

const getAllCategories = async () => {
    const query = `
        SELECT
            category_id,
            category
        FROM public.categories
    `;

    const result = await db.query(query);
    return result.rows;
}

const getCategoryById = async (id) => {
    const query = `
        SELECT
            category_id,
            category
        FROM public.categories
        WHERE category_id = $1
    `;
    const result = await db.query(query, [id])
    return result.rows[0]
}

const getProjectsByCategoryId = async (id) => {
    const query = `
        SELECT
            p.project_id,
            p.title,
            p.description,
            p.project_location,
            p.project_date
            FROM public.projects p
            JOIN public.project_categories pc
                ON p.project_id = pc.project_id
            WHERE pc.category_id = $1
            ORDER BY p.project_date;
    `
    const result = await db.query(query, [id]);
    return result.rows;
}

const assignCategoryToProject = async (categoryId, projectId) => {
    const query = `
        INSERT INTO project_categories (category_id, project_id)
        VALUES ($1, $2);
    `;

    await db.query(query, [categoryId, projectId]);
}

const updateCategoryAssignments = async (projectId, categoryIds) => {
    // First, remove existing category assignments for the project
    const deleteQuery = `
        DELETE FROM project_categories
        WHERE project_id = $1;
    `;
    await db.query(deleteQuery, [projectId]);

    // Next, add the new category assignments
    for (const categoryId of categoryIds) {
        await assignCategoryToProject(categoryId, projectId);
    }
}

export {
    getAllCategories,
    getCategoryById,
    getProjectsByCategoryId,
    assignCategoryToProject,
    updateCategoryAssignments
}