-- ========================================
-- Create organization table
-- ========================================
create table organization (
	organization_id serial primary key,
	organization_name varchar(255) not null,
	description text not null,
	contact_email varchar(255) not null,
	logo varchar(255) not null
);

-- ========================================
-- Insert data to organization table 
-- ========================================

insert into organization (organization_name, description, contact_email, logo)
values ('BrightFuture Builders', 'A nonprofit focused on improving community infrastructure through sustainable construction projects.', 'info@brightfuturebuilders.org', 'brightfuture-logo.png'),
('GreenHarvest Growers', 'An urban farming collective promoting food sustainability and education in local neighborhoods.', 'contact@greenharvest.org', 'greenharvest-logo.png'),
('UnityServe Volunteers', 'A volunteer coordination group supporting local charities and service initiatives.', 'hello@unityserve.org', 'unityserve-logo.png');

-- ========================================
-- Create projects table
-- ========================================

create table projects (
	project_id serial primary key,
	organization_id integer not null,
	title varchar(255) not null,
	description text not null,
	project_location varchar(255) not null,
	project_date date not null,

	foreign key (organization_id) references organization(organization_id)
);

-- ========================================
-- Insert data to projects table
-- ========================================

insert into projects (organization_id, title, description, project_location, project_date) VALUES
-- Projects for Organization 1 (BrightFuture Builders - ID: 1)
(1, 'Community Center Paint', 'Repainting the local community center walls and main hall.', 'Downtown Community Center', '2026-08-10'),
(1, 'Park Bench Repair', 'Fixing and staining broken wooden benches in Central Park.', 'Central Park', '2026-08-15'),
(1, 'Wheelchair Ramp Install', 'Building a wooden wheelchair access ramp at the public library.', 'Public Library', '2026-08-22'),
(1, 'School Fence Mend', 'Repairing the chain-link fence around the elementary school.', 'Greenwood Elementary', '2026-09-05'),
(1, 'Sidewalk Patching', 'Filling dangerous cracks in the sidewalk near the senior home.', 'Oak Street Senior Home', '2026-09-12'),

-- Projects for Organization 2 (GreenHarvest Growers - ID: 2)
(2, 'Community Garden Planting', 'Planting seasonal vegetables and herbs in the community plot.', 'East Side Garden', '2026-08-12'),
(2, 'Compost Bin Setup', 'Assembling and starting new compost bins for organic waste.', 'East Side Garden', '2026-08-19'),
(2, 'Harvest Day Festival', 'Helping harvest tomatoes and distributing them to neighbors.', 'East Side Garden', '2026-08-26'),
(2, 'Fruit Tree Pruning', 'Pruning the orchard trees before the winter season.', 'North Orchard', '2026-09-10'),
(2, 'Irrigation Pipe Install', 'Setting up a drip irrigation system for the new flower beds.', 'East Side Garden', '2026-09-18'),

-- Projects for Organization 3 (UnityServe Volunteers - ID: 3)
(3, 'Food Bank Sorting', 'Sorting and packing non-perishable food items for families.', 'City Food Bank', '2026-08-11'),
(3, 'Senior Tech Support', 'Helping elderly residents learn how to use smartphones and tablets.', 'Golden Age Residence', '2026-08-18'),
(3, 'Soup Kitchen Service', 'Preparing and serving hot meals at the local shelter.', 'Hope Shelter', '2026-08-25'),
(3, 'Back-to-School Supply Pack', 'Filling backpacks with school supplies for children in need.', 'Unity Center', '2026-09-01'),
(3, 'Local Park Cleanup', 'Picking up litter and clearing brush along the river trail.', 'Riverfront Park', '2026-09-15');

-- ========================================
-- Create categories table
-- ========================================

create table categories (
	category_id serial primary key,
	category varchar(255) not null
);

-- ========================================
-- Create N:M table for projects and categories
-- ========================================

create table project_categories (
	project_id int references projects(project_id),
	category_id int references categories(category_id),
	primary key (project_id, category_id)
);

-- ========================================
-- Insert data to categories table
-- ========================================

insert into categories ( category ) values 
('Community Improvement'),
('Environment'),
('Food Assistance'),
('Education & Support');

-- ========================================
-- Connect projects with categories
-- ========================================

INSERT INTO project_categories (project_id, category_id) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2),
(11, 3),
(12, 4),
(13, 3),
(14, 4),
(15, 2);
