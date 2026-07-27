import { getAllProjects } from '../models/projects.js';
import { getUpcomingProjects } from '../models/projects.js';
import { getProjectDetails } from '../models/projects.js';
import { getCategoriesByProjectId } from '../models/projects.js';

const NUMBER_OF_UPCOMING_PROJECTS = 5;

const showProjectsPage = async (req, res) => {
    const upcomingProjects = await getUpcomingProjects(NUMBER_OF_UPCOMING_PROJECTS);
    const title = 'Upcoming Service Projects';
    res.render('projects', { title, projects: upcomingProjects });
};

const showProjectDetailsPage = async (req, res) => {
    const id = req.params.id;
    const project = await getProjectDetails(id)
    const categories = await getCategoriesByProjectId(id)
    const title = project.title
    res.render('project', {title, project, categories})
}

// const projectDetails = await getProjectDetails();

export { showProjectsPage, showProjectDetailsPage }