import {
	Container,
	Divider,
	Grid,
	Box,


	Typography,
	Breadcrumbs,
	Link,


} from '@mui/material';

import NavigationMenu from './partials/navigation-menu.js';
import HomeSection from './partials/home.js';
import ProjectsSection from './partials/projects.js';
import MembersSection from './partials/members.js';

function App() {
  return (
		<div className="App">
			<Container fixed>
				<Grid container justifyContent="center" alignItems="center">

					<NavigationMenu />

					<HomeSection />
					<Grid item xs={12} mt={20} mb={20}><Divider orientation="horizontal" /></Grid>
					<ProjectsSection />
					<Grid item xs={12} mt={20} mb={20}><Divider orientation="horizontal" /></Grid>
					<MembersSection />
					<code>v0.1</code>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
