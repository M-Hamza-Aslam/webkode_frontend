import classes from "./MainSectionDiv.module.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const MainSectionDiv = (props) => {
  const heading = props.heading;
  return (
    <div className={classes.section}>
      <div className={classes.headingDiv}>
        <h2>{heading}</h2>
      </div>
      <hr></hr>
      {props.children}
    </div>
  );
};
export default MainSectionDiv;
