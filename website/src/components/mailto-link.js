import {
	Link,
	Typography
} from '@mui/material';



export const MailtoLink = (props) => (

	<Link href="mailto:{{props.email}}?subject={{props.subject}}">
		<Typography fontSize={16} fontWeight={500} color="#FF4B55">
			<u>{{props.title}}</u>
		</Typography>
	</Link>
)

export default MailtoLink;
