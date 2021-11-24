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
						This project is addressing the issue of booking a quarentine hotel in Taiwan for the GC Community Members.
						<br />
						<br />
						The project is in the idea stage.<br />
						 The project is looking for members to
						<br />---<br />
					</Typography>

					<Typography variant="body1">
						Validate this is a real problem<br />
						Propose and Vote on a solution<br />
						Connect us with people that can push the project forward<br />
						Create an Plan of Action  Build and Maintain the solution
					</Typography>

				</Box>
			</Grid>


			<Grid container justifyContent="center" alignItems="center" my={3} spacing={2}>

				<Grid item>
					<ExternalLink url="https://goldcardcommunity.github.io/better-quarantine-bookings">Learn more about the Project</ExternalLink>
				</Grid>
				<Grid item>
					<ExternalLink url="https://github.com/GoldCardCommunity/better-quarantine-bookings/discussions">Join the Discussion</ExternalLink>
				</Grid>
				<Grid item>
					<ExternalLink url="#">Join the Project</ExternalLink>
				</Grid>

			</Grid>
		</Grid>

	</Paper>
);

export default BqbProject;
