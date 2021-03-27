import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import WorkTemplate from '../../../components/pages/Work'
import Layout from '../../../components/Layout'

const WorkPreview = ({ entry }) => (
	<Layout page={`/work/${entry.get('slug')}`} isPreview>
		<Head>
			<link rel="stylesheet" href="/styles/about.css" />
		</Head>
		<WorkTemplate
			work={{
				id: entry.getIn(['slug']),
				title: entry.getIn(['data', 'title']),
				subtitle: entry.getIn(['data', 'subtitle']),
				description: entry.getIn(['data', 'description']),
				slug: entry.getIn(['slug']),
				images: entry.getIn(['data', 'images']).toJS(),
			}}
			startLoading={() => {}}
			stopLoading={() => {}}
			loading={false}
		/>
	</Layout>
)

WorkPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
		get: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
}

export default WorkPreview
