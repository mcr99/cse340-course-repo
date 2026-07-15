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

