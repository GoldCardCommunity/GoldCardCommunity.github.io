import React from 'react';
import {
	Box,
	Grid,
	Link,
	Typography,
} from '@mui/material';
import ExternalLink from '../components/external-link.js';

import gccLogo from '../assets/gcc-logo-round.png';
import EmailLink from '../components/mailto-link.js';

export const HomeSection = (props) => (
	<React.Fragment>

		<Grid id="home" container justifyContent="center" alignItems="center" mt={12}>
			<Grid item xs={12}>
				<Box textAlign="center">
					<img src={gccLogo} alt="Gold Card Community Logo" width="80" height="80" />
				</Box>
			</Grid>
		</Grid>

		<Grid container justifyContent="center" alignItems="center" mt={4}>
			<Grid item xs={12}>
				<Box textAlign="center">
					<Typography variant="h1">
						Gold Card Community Labs
					</Typography>
				</Box>
			</Grid>
		</Grid>


		{ true &&
			<Grid container justifyContent="center" alignItems="center" mt={4}>
				<Grid item xs={12}>
					<Box textAlign="center">
						<ExternalLink url="https://github.com/GoldCardCommunity/goldcardcommunity.github.io/discussions">
						Join the Discussion on Github!
						</ExternalLink>
					</Box>
				</Grid>
			</Grid>
		}

		<Grid container justifyContent="center" alignItems="center" mt={4}>
			<Grid item xs={12} md={10} lg={8}>
				<Box textAlign="center">
					<Typography variant="body1">
						The <b>GCC Labs</b> was created to tackle our communities problems,
						showcase our community members and projects they’re invloved in!
					</Typography>
				</Box>

				<Box textAlign="center" mt={4}>
					<Typography variant="body2">
						This community is an experiment. It has no leaders, teams, structure
						or focus. I created this project based on the frustration and desire for
						innovation I’ve been seeing in our GCC Line Group.
					</Typography>
				</Box>

				<Box textAlign="center" mt={4}>
					<Typography variant="body2">
						This project tries to provide structure and a platform for discord
						and collaboration.
					</Typography>
				</Box>


				<Box textAlign="center" mt={6}>
					<Typography variant="body2">
						If you want to get involved, contribute or give feedback you
						can message me at <EmailLink variant="emailDefault" email="marcin.k.cebula@gmail.com" subject="Add me to GCC Labs">marcin.k.cebula@gmail.com</EmailLink><br />
						or join the project on <ExternalLink url="https://github.com/GoldCardCommunity/goldcardcommunity.github.io/discussions">GitHub</ExternalLink>.
					</Typography>
				</Box>


			</Grid>
		</Grid>

	</React.Fragment>
)

export default HomeSection;
