import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Ошибка', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div>
            <h1 style={{textAlign: 'center'}}>Что-то пошло не так :(</h1>
            <p>
              В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
            </p>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
