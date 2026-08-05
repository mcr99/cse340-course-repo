import express from 'express'

import { showHomePage } from './controllers/index.js'
import { showOrganizationsPage } from './controllers/organizations.js'
import { showProjectsPage } from './controllers/projects.js'
import { processAssignCategoriesForm, showAssignCategoriesForm, showCategoriesPage } from './controllers/categories.js'
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
router.get('/categories', showCategoriesPage)
router.get('/organization/:id', showOrganizationDetailsPage)
router.get('/project/:id', showProjectDetailsPage)
router.get('/category/:id', showCategoryDetailsPage)
router.get('/new-organization', showNewOrganizationForm)
router.get('/edit-organization/:id', showEditOrganizationForm)
router.get('/new-project', showNewProjectForm)
router.get('/assign-categories/:projectId', showAssignCategoriesForm)
// Test route for 500 errors
router.get('/test-error', showTestErrorPage)
// Route to handle new organization form submission
router.post('/new-organization', organizationValidation, processNewOrganizationForm)
router.post('/edit-organization/:id', organizationValidation, processEditOrganizationForm)
router.post('/new-project', projectValidation, processNewProjectForm)
router.post('/assign-categories/:projectId', processAssignCategoriesForm)


export default router