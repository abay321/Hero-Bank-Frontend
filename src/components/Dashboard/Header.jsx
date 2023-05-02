import { useState } from "react";

import { HeroBankBg } from "../../assets/Image";
import * as CgIcons from "react-icons/cg";
import * as TbIcons from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Badge, Collapse, Drawer, Space, Tooltip } from "antd";
import sx from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { Panel } = Collapse;

  function showDrawer() {
    setOpen(true);
  }

  const onChange = (key) => {
    console.log(key);
  };

  const text = (
    <span>
      Hello our new member, thank you for join Hero Bank! <br />I hope you get a
      memorable experience while using Hero Bank
      <br />
      <br />
      Enjoy it!
      <br />
      <br />
      -Hero Bank
    </span>
  );

  return (
    <header className={sx.header}>
      <div className={sx.logo_header}>
        <img src={HeroBankBg} alt="" />
        <span>
          <strong>
            <h1>Hero</h1>
          </strong>
          <p>Bank.</p>
        </span>
      </div>
      <div className={sx.icon_profile}>
        <Tooltip title={"Account"}>
          <CgIcons.CgProfile
            style={{
              fontSize: "30px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/account")}
          />
        </Tooltip>
        <Tooltip title="Notification">
          <Badge count={5}>
            <TbIcons.TbBellRingingFilled
              style={{
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setOpen(true)}
            />
          </Badge>
        </Tooltip>
      </div>
      <Drawer
        headerStyle={{
          textAlign: "center",
        }}
        width={500}
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        title={
          <h3 style={{ fontWeight: "lighter", letterSpacing: "1px" }}>
            Notification
          </h3>
        }
        extra={
          <Space>
            <Tooltip title="Notification">
              <Badge count={5}>
                <TbIcons.TbBellRingingFilled
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpen(false)}
                />
              </Badge>
            </Tooltip>
          </Space>
        }
      >
        <Collapse
          defaultActiveKey={["1"]}
          expandIconPosition="right"
          onChange={onChange}
        >
          <Panel header={<h3>Your account has active!</h3>} key="1">
            <p>{text}</p>
          </Panel>
          <Panel header={<h3>Someone has send you money!</h3>} key="2">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Drawer>
    </header>
  );
}

export default Header;
