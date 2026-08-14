import express from 'express'
import { showHomePage } from './controllers/index.js'
import { showOrganizationsPage, showOrganizationDetailsPage } from './controllers/organizations.js'
import { processEditProjectForm, showEditProjectForm, showProjectsPage } from './controllers/projects.js'
import { categoryValidation, processAssignCategoriesForm, processEditCategoryForm, processNewCategoryForm, showAssignCategoriesForm, showCategoriesPage, showEditCategoryForm, showNewCategoryForm } from './controllers/categories.js'
import { showTestErrorPage } from './controllers/errors.js'
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
import { processLoginForm, processLogout, processUserRegistrationForm, requireLogin, requireRole, showDashboard, showLoginForm, showUserRegistrationForm, showUsers } from './controllers/users.js'


const router = express.Router()

router.get('/', showHomePage)
router.get('/organizations', showOrganizationsPage)
router.get('/projects',  showProjectsPage)
router.get('/organization/:id', showOrganizationDetailsPage)
router.get('/project/:id', showProjectDetailsPage)
router.get('/categories', showCategoriesPage)
router.get('/category/:id', showCategoryDetailsPage)
router.get('/new-category', requireRole('admin'), showNewCategoryForm)
router.get('/edit-category/:id', requireRole('admin'), showEditCategoryForm)
router.get('/new-organization', requireRole('admin'), showNewOrganizationForm)
router.get('/edit-organization/:id', requireRole('admin'), showEditOrganizationForm)
router.get('/new-project', requireRole('admin'), showNewProjectForm)
router.get('/assign-categories/:projectId', requireRole('admin'), showAssignCategoriesForm)
router.get('/edit-project/:id', requireRole('admin'), showEditProjectForm)
router.get('/register', showUserRegistrationForm)
router.get('/login', showLoginForm)
router.get('/logout', processLogout)
router.get('/dashboard', requireLogin, showDashboard)
router.get('/users', requireRole('admin'), showUsers)
// Test route for 500 errors
router.get('/test-error', showTestErrorPage)
// Route to handle new organization form submission
router.post('/new-organization', requireRole('admin'), organizationValidation, processNewOrganizationForm)
router.post('/edit-organization/:id', requireRole('admin'), organizationValidation, processEditOrganizationForm)
router.post('/new-project', requireRole('admin'), projectValidation, processNewProjectForm)
router.post('/assign-categories/:projectId', requireRole('admin'), processAssignCategoriesForm)
router.post('/edit-project/:id', requireRole('admin'), projectValidation, processEditProjectForm)
router.post('/new-category', requireRole('admin'), categoryValidation, processNewCategoryForm)
router.post('/edit-category/:id', requireRole('admin'), categoryValidation, processEditCategoryForm)
router.post('/register', processUserRegistrationForm)
router.post('/login', processLoginForm)


export default router