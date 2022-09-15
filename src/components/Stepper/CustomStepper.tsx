import { useLocation } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Stepper = (props: any) => {
  const location = useLocation();
  console.log(location.pathname);
  const currentLocation = location.pathname;

  function getAdditionalClass(page: any) {
    if (page.link === currentLocation) {
      return "page-wrapper--active";
    }
    if (checkIsPageCompleted(page)) {
      return "page-wrapper--completed";
    }
    return "";
  }
  let checkIsPageCompleted = (page: any) => {
    let currentStepIndex = props.pages.findIndex(
      (item: any) => item.link === currentLocation
    );
    console.log("currentStepIndex", currentStepIndex);
    let pageIndex = props.pages.findIndex(
      (item: any) => item.link === page.link
    );
    console.log("pageIndex", pageIndex);

    return pageIndex < currentStepIndex;
  };

  let pagesList = props.pages.map((page: any) => {
    return (
      <div
        className={"page-wrapper " + getAdditionalClass(page)}
        key={page.name}
      >
        <div>{page.name}</div>
        {getAdditionalClass(page) === "page-wrapper--completed" && (
          <div>
            <CheckCircleOutlineIcon  sx={{width: "15px", m: "7px 0 0 5px"}}/>
          </div>
        )}
      </div>
    );
  });

  const getCompletedPagesPercent = () => {
    let currentStepIndex = props.pages.findIndex(
      (item: any) => item.link === currentLocation
    );
    let result = Math.ceil((currentStepIndex * 100) / props.pages.length);

    return `${result} %`;
  };

  return (
    <div className="pages-list-wrapper">
      <div className="completed-step-percent-wrapper">
        {getCompletedPagesPercent()}
      </div>
      <div className={"stepper-wrapper"}>{pagesList}</div>
    </div>
  );
};

export default Stepper;
