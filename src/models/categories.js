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

export { getAllCategories, getCategoryById, getProjectsByCategoryId }