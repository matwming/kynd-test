import { render, fireEvent, screen } from "@testing-library/vue";
import MemberView from "./MemberView.vue";

describe("MemberView", () => {
  it('renders "Load Members" button when MemberView initial load', () => {
    //Arrange
    const isLoading = false;
    const isLoaded = false;

    //Act
    render(MemberView, {
      mocks: {
        $store: {
          state: {
            isLoading: false,
            isLoaded: false,
          },
        },
      },
    });

    //Assert
    screen.getByText("Load Members");
  });

  it("renders loading circle when MemberView page is loading", async () => {
    //Arrange
    const isLoading = true;
    const isLoaded = false;

    //Act
    render(MemberView, {
      mocks: {
        $store: {
          state: {
            isLoading,
            isLoaded,
          },
        },
      },
    });

    //Assert
    screen.getByTestId("loading-circle");
  });

  it("renders error message when there is an error", () => {
    //Arrange
    const errorMessage = "An error occurred";

    //Act
    render(MemberView, {
      mocks: {
        $store: {
          state: {
            isLoading: false,
            isLoaded: false,
            error: errorMessage,
          },
        },
      },
    });

    //Assert
    screen.getByText(
      `Opps! there is an error: An error occurred. Please refresh the page.`
    );
  });

  it("renders members when they are loaded", () => {
    //Arrange
    const members = [{ firstName: "John", lastName: "Doe" }];

    //Act
    render(MemberView, {
      mocks: {
        $store: {
          state: {
            isLoading: false,
            isLoaded: true,
            members,
          },
        },
      },
    });

    //Assert
    screen.getByText(`John Doe`);
  });

  it('triggers an action when "Load Members" button is clicked', async () => {
    //Arrange
    const mockStore = {
      dispatch: jest.fn(),
      state: {
        isLoading: false,
        isLoaded: false,
      },
    };

    //Act
    render(MemberView, {
      mocks: {
        $store: mockStore,
      },
    });

    const button = screen.getByText("Load Members");
    await fireEvent.click(button);

    //Assert
    expect(mockStore.dispatch).toHaveBeenCalledWith("FETCH_MEMBERS");
  });
});
