jest.mock('next-contentlayer/hooks', () => ({
  useMDXComponent: () => (props) => <div {...props} />
}))
