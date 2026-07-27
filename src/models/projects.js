import db from "./db.js";

const getAllProjects = async () => {
    const query = `
        SELECT
            p.project_id,
            p.title,
            p.description,
            p.project_location,
            p.project_date,
            o.organization_name
        FROM public.projects p
        JOIN public.organization o
            ON p.organization_id = o.organization_id;
    `;

    const result = await db.query(query)
    return result.rows
}

const getProjectsByOrganizationId = async (organizationId) => {
    const query = `
        SELECT
            project_id,
            organization_id,
            title,
            description,
            project_location,
            project_date
        FROM projects
        WHERE organization_id = $1
        ORDER BY project_date;
    `;

    const queryParams = [organizationId]
    const result = await db.query(query, queryParams)

    return result.rows;
}

const getUpcomingProjects = async (number_of_projects) => {
    const query = `
        SELECT
            p.project_id,
            p.title,
            p.description,
            p.project_date,
            p.project_location,
            o.organization_id,
            o.organization_name
        FROM public.projects p
        JOIN public.organization o
            ON p.organization_id = o.organization_id
        WHERE p.project_date >= CURRENT_DATE
        ORDER BY p.project_date ASC
        LIMIT $1
    `

    const result = await db.query(query, [number_of_projects])
    return result.rows
}

const getProjectDetails = async (id) => {
    const query = `
        SELECT
            p.project_id,
            p.title,
            p.description,
            p.project_date,
            p.project_location,
            o.organization_id,
            o.organization_name
        FROM public.projects p
        JOIN public.organization o
            ON p.organization_id = o.organization_id
        WHERE p.project_id = $1
    `
    const result = await db.query(query, [id])
    return result.rows[0]
}

const getCategoriesByProjectId = async (id) => {
    const query = `
        SELECT
            c.category_id,
            c.category
        FROM public.categories c
        JOIN public.project_categories pc
            ON c.category_id = pc.category_id
        WHERE pc.project_id = $1;
    `;
    const result = await db.query(query, [id]);
    return result.rows;
}

export {
    getAllProjects,
    getProjectsByOrganizationId,
    getUpcomingProjects,
    getProjectDetails,
    getCategoriesByProjectId,
}