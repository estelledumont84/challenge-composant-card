import composantLogo from "./assets/composant.png";
import processeurLogo from "./assets/processeur.png";
import styled from "styled-components";

const CardImage = styled.section`
  display: flex;
  flex-direction: flex-start;
  width: 60%;
`;

const SecondCard = styled.aside`
  display: flex;
  justify-content: end;
`;

const Container = styled.div`
  display: flex;
  box-shadow: 0 10px 20px 0;
  justify-content: space-between;
  width: 50%;
  margin-left: 25%;
`;
const Img = styled.div`
  display: flex;
  width: auto;
  height: auto;
`;
const Text = styled.div`
  display: flex;
  width: 25%;
  position: absolute;
  margin-top: 5%;
  margin-left: 1%;
  flex-direction: column;
  color: black;
`;

const Title = styled.h1`
  display: flex;
  font-size: 150%;
  margin-top: 0;
  margin-left: 10%;
`;

function App() {
  return (
    <Container>
      <CardImage>
        <section>
          <Img>
            <img
              src={processeurLogo}
              className="logo-processeur"
              alt="Processeur logo"
            />
          </Img>
        </section>
        <Title>
          <h1>Processor Concept</h1>
        </Title>

        <Text>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            possimus expedita sit repellat facilis dolorem qui saepe debitis
            obcaecati a, accusamus deserunt ipsam accusantium beatae nihil
            commodi pariatur et sint.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde cum
            ullam quaerat est? Facere, alias. Error quis, quae non velit animi
            placeat perspiciatis perferendis tenetur exercitationem nisi est cum
            ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quos
            maxime eos voluptas laudantium a laborum iusto dolor dolorem
            provident,pariatur officiis suscipit reprehenderit ipsa magnam
            soluta corrupti similique quas.
          </p>

          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime
            laboriosam pariatur quo in quos laborum perspiciatis obcaecati
            nostrum dolorum facere, expedita hic illo sit odio animi odit omnis
            dolor?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur suscipit sunt id, repellendus inventore nihil. Repellat
            porro, hic nemo nulla dolorem officia reprehenderit maxime adipisci,
            iure laudantium ducimus aliquid veritatis.
          </p>
        </Text>
      </CardImage>
      <aside>
        <SecondCard>
          <img
            src={composantLogo}
            className="logo composant"
            alt="Composant logo"
          />
        </SecondCard>
      </aside>
    </Container>
  );
}

export default App;
