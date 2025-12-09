
import { AppProvider, Page, Layout, Card, Text, Button, Grid } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Custom Storefront" fullWidth>
        <Layout>
          <Layout.Section>
            <Card>
              <Text as="h2" variant="headingMd">
                Featured Collection
              </Text>
              <div style={{ marginTop: '20px' }}>
                <Grid>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
                    <Card>
                      <div style={{ padding: '10px' }}>
                        <img
                          src="https://via.placeholder.com/150"
                          alt="Product"
                          style={{ width: '100%', borderRadius: '4px' }}
                        />
                        <Text as="h3" variant="bodyMd" fontWeight="bold">
                          Cool T-Shirt
                        </Text>
                        <Text as="p">$25.00</Text>
                        <Button variant="primary">Add to Cart</Button>
                      </div>
                    </Card>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
                    <Card>
                      <div style={{ padding: '10px' }}>
                        <img
                          src="https://via.placeholder.com/150"
                          alt="Product"
                          style={{ width: '100%', borderRadius: '4px' }}
                        />
                        <Text as="h3" variant="bodyMd" fontWeight="bold">
                          Awesome Hat
                        </Text>
                        <Text as="p">$15.00</Text>
                        <Button variant="primary">Add to Cart</Button>
                      </div>
                    </Card>
                  </Grid.Cell>
                </Grid>
              </div>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
}

export default App;
