const PROVIDERS_TEMPLATE = `
export default function RootProvider({ children }) {
  return (
    <>
      {/* <Wrap The App Here > */}
        <>{children}</>
      {/* < / Wrap > */}
    </>
  );
}
`

module.exports = { PROVIDERS_TEMPLATE };

