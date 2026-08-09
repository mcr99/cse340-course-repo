import express from 'express'
import { showHomePage } from './controllers/index.js'
import { showOrganizationsPage } from './controllers/organizations.js'
import { processEditProjectForm, showEditProjectForm, showProjectsPage } from './controllers/projects.js'
import { categoryValidation, processAssignCategoriesForm, processEditCategoryForm, processNewCategoryForm, showAssignCategoriesForm, showCategoriesPage, showEditCategoryForm, showNewCategoryForm } from './controllers/categories.js'
import { showTestErrorPage } from './controllers/errors.js'
import { showOrganizationDetailsPage } from './controllers/organizations.js'
import { showProjectDetailsPage } from './controllers/projects.js'
import { showCategoryDetailsPage } from './controllers/categories.js'
import { showNewOrganizationForm } from './controllers/organizations.js'
import { processNewOrganizationForm } from './controllers/organizations.js'
import { organizationValidation } from './controllers/organizations.js'
import { showEditOrganizationForm } from './controllers/organizations.js'
import { processEditOrganizationForm } from './controllers/organizations.js'
import { showNewProjectForm } from './controllers/projects.js'
import { projectValidation } from './controllers/projects.js'
import { processNewProjectForm } from './controllers/projects.js'


const router = express.Router()

router.get('/', showHomePage)
router.get('/organizations', showOrganizationsPage)
router.get('/projects',  showProjectsPage)
router.get('/organization/:id', showOrganizationDetailsPage)
router.get('/project/:id', showProjectDetailsPage)
router.get('/categories', showCategoriesPage)
router.get('/category/:id', showCategoryDetailsPage)
router.get('/new-category', showNewCategoryForm)
router.get('/edit-category/:id', showEditCategoryForm)
router.get('/new-organization', showNewOrganizationForm)
router.get('/edit-organization/:id', showEditOrganizationForm)
router.get('/new-project', showNewProjectForm)
router.get('/assign-categories/:projectId', showAssignCategoriesForm)
router.get('/edit-project/:id', showEditProjectForm)
// Test route for 500 errors
router.get('/test-error', showTestErrorPage)
// Route to handle new organization form submission
router.post('/new-organization', organizationValidation, processNewOrganizationForm)
router.post('/edit-organization/:id', organizationValidation, processEditOrganizationForm)
router.post('/new-project', projectValidation, processNewProjectForm)
router.post('/assign-categories/:projectId', processAssignCategoriesForm)
router.post('/edit-project/:id', projectValidation, processEditProjectForm)
router.post('/new-category', categoryValidation, processNewCategoryForm)
router.post('/edit-category/:id', categoryValidation, processEditCategoryForm)


export default router