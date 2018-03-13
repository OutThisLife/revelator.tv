import withData from '@/lib/withData'

export default withData(({ page }) => (
  <div>Already have the data coming in: {JSON.stringify(page.fields)}</div>
))
