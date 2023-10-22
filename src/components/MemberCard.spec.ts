import { render, screen } from "@testing-library/vue";
import MemberCard from "./MemberCard.vue";

jest.mock("../services/members");

describe("MemberCard", () => {
  it("renders member initials MW if firstName is Mat and last name is Wu", () => {
    // Arrange
    const member = {
      firstName: "Mat",
      lastName: "Wu",
      lastMessage: "Hello World",
      joinedAt: "2022-09-20",
    };

    //Act
    render(MemberCard, {
      props: { member },
    });

    //Assert
    screen.getByText("MW");
  });

  it("renders `Member for 397 days` if the member joined on 2022-09-22", () => {
    //Arrange
    const member = {
      firstName: "Mat",
      lastName: "Wu",
      lastMessage: "Hello World",
      joinedAt: "2022-09-20",
    };
    jest.spyOn(Date, "now").mockReturnValue(1697975751242);

    //Act
    render(MemberCard, {
      props: { member },
    });

    //Assert
    screen.getByText(`Member for 397 days`);
    jest.spyOn(Date, "now").mockRestore();
  });

  it("displays the member lastMessage correctly", () => {
    //Arrange
    const member = {
      firstName: "Mat",
      lastName: "Wu",
      lastMessage: "Hello World",
      joinedAt: "2022-09-20",
    };

    //Act
    render(MemberCard, {
      props: { member },
    });

    //Assert
    screen.getByText("Hello World");
  });
});
