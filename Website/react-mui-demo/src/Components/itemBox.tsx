import { Box, styled } from "@mui/material";
import AppCard from "./AppCard";


export const Item = () => {
    const ItemContainer = styled(Box) (({theme}) => ({
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "0px 0px",
        background: "#4CAF50"
    }));

    return (
        <ItemContainer>
                
        </ItemContainer>
    );
}

export default Item;