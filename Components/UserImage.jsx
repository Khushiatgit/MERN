import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }} //cover-> entire space
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`} //will grab profile img as needed for each profile users 
      />
    </Box>
  );
}; 

export default UserImage;
