import React from "react";
import { Nav } from "react-bootstrap";
import styles from "../../style.module.css";
import { KeyboardArrowLeft } from "@material-ui/icons";

export const NavTab = ({ item, idd, classname, setClassname }) => {
  // const [classname, setClassname] = useState();

  const handleClick = (id) => {
    setClassname(id);
  };
  return (
    <>
      <Nav.Item className="p-0">
        <Nav.Link
          onClick={() => handleClick(idd)}
          className={classname === idd ? `${styles.btnTab}` : null}
          eventKey={idd}
        >
          {item.title}
          {classname === idd ? <KeyboardArrowLeft /> : null}
          <hr className={styles.hr} />
        </Nav.Link>
      </Nav.Item>
    </>
  );
};
