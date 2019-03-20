import React from 'react';

const WithAuthenticate = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
}

export default WithAuthenticate;