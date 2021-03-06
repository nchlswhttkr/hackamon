import React from "react";
import { Query } from "react-apollo";
// GraphQL Queries
import { GET_EVENTS } from "../queries/events";

import ViewCard from "../components/ViewCard";
import Loader from "../components/Loader";

function ViewEvent() {
  return (
    <Query query={GET_EVENTS}>
      {({ loading, error, data }) => {
        if (loading) return <Loader size={100} text="Loading your events"/>;
        if (error) return `Error! ${error.message}`;
        const { events } = data;
        return events.map((event, key) => <ViewCard event={event} key={key} />);
      }}
    </Query>
  );
}

export default ViewEvent;
