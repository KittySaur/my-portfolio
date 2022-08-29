import {
  ProjectGrid,
  GridItem,
  ProjectImg,
  ProjectButton,
} from "./Projects.styled";
import PROJECTS_DATA from "../../projects-data";

function ProjectItem() {
  function isLink(link) {
    if (link !== "") {
      return (
        <ProjectButton>
          <a target="blank" href={link}>
            {"Demo"}
          </a>
        </ProjectButton>
      );
    } else {
      return "";
    }
  }
  return (
    <ProjectGrid>
      {PROJECTS_DATA.map(({ title, id, imgSrc, button, gitHubLink, link }) => (
        <GridItem key={id}>
          <h3>{title}</h3>
          <ProjectImg src={imgSrc} />
          <ProjectButton>
            <a target="blank" href={gitHubLink}>
              {button}
            </a>
          </ProjectButton>
          {isLink(link)}
        </GridItem>
      ))}
    </ProjectGrid>
  );
}

export default ProjectItem;
