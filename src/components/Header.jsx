import React from "react";
import { Button } from "web3uikit";

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
};

export default function Header({ onConnect, account }) {
  return (
    <div style={header}>
      <a href="/" style={{ textDecoration: "none" }}>
      </a>
      <Button
        onClick={onConnect}
        text={!account ? "Connect Wallet" : `Connected ${account}`}
      />
    </div>
  );
}
