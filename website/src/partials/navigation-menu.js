import {
	Box,
	Grid,
	Link,
	Typography,
	Breadcrumbs
} from '@mui/material';



export const NavigationMenu = (props) => (
	<Grid item>
    <Box mt={3} mb={3}>
			<Breadcrumbs aria-label="breadcrumb">
				<Link underline="hover" color="inherit" href="#projects">
					<Typography fontSize={16} fontWeight={300}>
					Projects</Typography>
				</Link>
				<Link underline="hover" color="inherit" href="#members">
					<Typography fontSize={16} fontWeight={300}>
						Members
					</Typography>
				</Link>
				<Link underline="hover" color="inherit" href="https://github.com/GoldCardCommunity/goldcardcommunity.github.io/discussions" target="_blank">
					<Typography fontSize={16} fontWeight={500} color="#FF4B55">
						<u>Join the Discussion!</u>
					</Typography>
				</Link>
			</Breadcrumbs>
		</Box>
	</Grid>
)

export default NavigationMenu;
