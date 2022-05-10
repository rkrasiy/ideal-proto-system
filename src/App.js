import React from 'react';
import {ThemeContext, themes} from './context/theme-context';
import ThemedButton from './components/themed-button';

// Промежуточный компонент, который использует ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

export default class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // ThemedButton внутри ThemeProvider использует
    // значение светлой UI-темы из состояния, в то время как
    // ThemedButton, который находится вне ThemeProvider,
    // использует тёмную UI-тему из значения по умолчанию
    return (
      <main>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButton />
        </section>
      </main>
    );
  }
}
