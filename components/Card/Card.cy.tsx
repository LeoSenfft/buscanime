import Card from "@/components/Card/Card";
import { mount } from "cypress/react18";
import { CardProps } from "@/components/Card/Card";
import cardsData from "@/cypress/fixtures/card.json";

describe("<Card />", () => {
  cardsData.forEach((cardProps: CardProps) => {
    it("should render and display expected content", () => {
      Cypress.Commands.add("mount", (component, options) => {
        return mount(component, options);
      });

      cy.mount(
        <Card
          title={cardProps.title}
          averageScore={cardProps.averageScore}
          categories={cardProps.categories}
          imageSrc={cardProps.imageSrc}
        />
      );

      // title
      cy.get('[data-testid="card-title"]').should("have.text", cardProps.title);

      //categories
      if (cardProps.categories && cardProps.categories.length > 0) {
        cy.get('[data-testid="card-category"]').each((item, index) => {
          cy.wrap(item).should("contain.text", cardProps.categories![index]);
        });
      }

      // score
      cy.get('[data-testid="card-score"]').should("contain.text", cardProps.averageScore);
      cy.get('[data-testid="card-score"]').should("satisfy", ($el) => {
        const classList = Array.from($el[0].classList);

        let colorStyle = "bg-success";

        if (cardProps.averageScore) {
          if (cardProps.averageScore < 50) {
            colorStyle = "bg-danger";
          } else if (cardProps.averageScore < 80) {
            colorStyle = "bg-warning";
          }
        }

        return classList.includes(colorStyle); // passes
      });
    });
  });
});
