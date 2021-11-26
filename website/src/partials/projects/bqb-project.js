import {
		Box,
		Paper,
		Grid,
		Link,
		Chip,
		Stack,
		Typography,
} from '@mui/material';
import ExternalLink from '../../components/external-link.js';
import EmailLink from '../../components/mailto-link.js';

import bqbLogo from '../../assets/bqb-logo.png';


export const BqbProject = (props) => (

		<Paper variant="outlined">

			<Grid container justifyContent="center" alignItems="center" py={2} px={1}>

				<Grid item xs={12}>
					<Box textAlign="center">
						<img src={bqbLogo} alt="Better Quarantine Bookings Logo" width="80" height="80" />
					</Box>
				</Grid>

				<Grid item xs={12}>
					<Box textAlign="center" pt={1}>
						<Typography variant="h5">
							[BQB] Better Quarantine Bookings
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={12} mt={2}>
					<Box textAlign="center">
						<Stack spacing={1} alignItems="center">
							<Stack direction="row" spacing={1}>
								<Chip color="secondary" label="IDEA STAGE" variant="outlined" />
								<Chip color="secondary" label="DISCUSSION" variant="outlined" />
							</Stack>
						</Stack>
					</Box>
				</Grid>




				<Grid item xs={12} mt={5}>
					<Box textAlign="center">
						<Typography variant="body2">
							<Typography variant="body1">
								The Problem
							</Typography>

							This project is addressing the issue of booking a quarentine hotel in Taiwan for the GC Community Members.
							<br />
							<br />
						<Typography variant="body1">
							Ideal Solution
						</Typography>


							As a non-native Mandarin speaker coming to Taiwan I would like to easily find and book a Quarantine Hotel with commonly establishes user experience, design and processes established by the western world.
							<br />
							<br />
						</Typography>
						<Typography variant="body1">
							 The project is looking for members to
						</Typography>

						<Typography variant="body2">
								<li>Validate this is a real problem</li>
								<li>Propose and vote on a solutions</li>
								<li>Conntect with people that would grant access to data required to build a solution and move the project forward</li>
								<li>Create an plan of action to build and maintain the project</li>

						</Typography>

					</Box>
				</Grid>


				<Grid container justifyContent="center" alignItems="center" my={3} spacing={2}>

					<Grid item>
						<ExternalLink url="https://goldcardcommunity.github.io/better-quarantine-bookings">Learn more about the Project</ExternalLink>
					</Grid>
					<Grid item>
						<ExternalLink url="https://github.com/GoldCardCommunity/better-quarantine-bookings/discussions/4">Join the Discussion</ExternalLink>
					</Grid>
					<Grid item>
						<EmailLink variant="emailAction" email="marcin.k.cebula@gmail.com" subject="Add me to [BQB] Better Quarantine Bookings ">Join the Project</EmailLink>
					</Grid>

				</Grid>
			</Grid>

		</Paper>
);

export default BqbProject;
