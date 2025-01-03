import { Box } from "@mui/material"; 
import {styled} from "@mui/system";

const WidgetWrapper =styled(Box)(({theme}) => (
    {
        padding: "1.5rem 1.rem 0.75rem 1.5rem",
        backgrounColor: theme.palette.background.alt,
        borderRadius:"0.75rem"
    })
);

export default WidgetWrapper;
