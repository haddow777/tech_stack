import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import { Header } from "./Components/common";
import LibraryList from "./Components/LibraryList";

const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <Header>Tech Stack</Header>
      <LibraryList />
    </View>
  </Provider>
);

export default App;
