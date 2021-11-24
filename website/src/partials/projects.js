import React from 'react';
import {
	Box,
	Grid,
	Link,
	Typography,
} from '@mui/material';
import ExternalLink from '../components/external-link.js';


export const ProjectSection = (props) => (
	<React.Fragment>

		<Grid id="projects" container justifyContent="center" alignItems="center" mt={0}>
			<Grid item xs={12}>
				<Box textAlign="center">
					<Typography variant="h2">
						What are we working on?
					</Typography>
				</Box>
			</Grid>
		</Grid>

		<Grid container justifyContent="center" alignItems="center" mt={3}>
			<Grid item xs={12}>
				<Box textAlign="center">
					<Typography variant="h6">
						Community Projects
					</Typography>
				</Box>
			</Grid>
		</Grid>



		<Grid container justifyContent="center" alignItems="center" mt={1}>
			<Grid item xs={12} md={10} lg={8}>

				<Box textAlign="center" mt={4}>
					<Typography variant="body2">
						Below you can find projects the community is involved in and working on. If you want to address
a problem or create new projects please submit a Disucssion to the group first.
					</Typography>
				</Box>

			</Grid>
		</Grid>

	</React.Fragment>
)

export default ProjectSection;
