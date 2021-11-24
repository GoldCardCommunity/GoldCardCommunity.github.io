import React from 'react';
import {
	Box,
	Grid,
	Link,
	Typography,
} from '@mui/material';
import ExternalLink from '../components/external-link.js';

import gccLogo from '../assets/gcc-logo-round.png';


export const MembersSection = (props) => (
	<React.Fragment>


		<Grid id="members" container justifyContent="center" alignItems="center" mt={0}>
			<Grid item xs={12}>
				<Box textAlign="center">
					<Typography variant="h2">
						Community Members
					</Typography>
				</Box>
			</Grid>
		</Grid>





		<Grid container justifyContent="center" alignItems="center" mt={1} pb={50}>
			<Grid item xs={12} md={10} lg={8}>

				<Box textAlign="center" mt={7}>
					<Typography variant="body2">
						<pre>[...TODO...]</pre><br />
						coming soon...
					</Typography>
				</Box>

			</Grid>
		</Grid>


	</React.Fragment>
)

export default MembersSection;
