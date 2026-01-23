## How to setup test

1.  `npm install -D vitest jsdom@22`
    `npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event`


## vitest
Test runner
1. Runs test files
2. Provides describe, test, expect, vi
3. Faster alternative to Jest

## jsdom
1. Fake browser
2. Gives us window, document, DOM APIs
3. Required because React runs in the browser

## @testing-library/react

Render React components
1. render(Component)
2. screen.getByText(), getByRole()
3. Tests UI the way users see it

## @testing-library/jest-dom
Better assertions

Adds readable matchers like:

1. toBeInTheDocument()
1. toHaveTextContent()
1. toBeDisabled()

## @testing-library/user-event
Real user interactions

1. Clicking
2. Typing
3. Keyboard navigation

## Add a setup.js 
1. Create a `setup.js` at src/tests/setup.js and paste below code
    ```js
    import '@testing-library/jest-dom'
    ```

## Configure Vitest

Paste below code in - `vite.config.js`

```json

    test: {
        globals: true,          // use describe, test, expect directly
        environment: 'jsdom',   // browser-like environment
        setupFiles: './src/tests/setup.js'
    }

```

## Add Test Script

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```


