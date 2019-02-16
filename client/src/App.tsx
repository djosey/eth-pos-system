import * as React from "react";
import styled from "styled-components";

import Card from "./components/Card";
import Header from "./components/Header";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
`;

const SColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SContent = styled(SColumn)`
  width: 100%;
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const STitle = styled.h1`
  margin: 10px auto 20px;
  text-align: center;
`;

class App extends React.Component<any, any> {
  public state = {
    loading: false
  };

  public render() {
    return (
      <SContainer>
        <Header />
        <SContent>
          <Card maxWidth={400}>
            <STitle>{`Wallet`}</STitle>
          </Card>
        </SContent>
      </SContainer>
    );
  }
}

export default App;
