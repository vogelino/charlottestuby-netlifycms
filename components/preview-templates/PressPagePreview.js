import React from 'react'
import PropTypes from 'prop-types'
import Press from '../pages/Press'
import Layout from '../Layout'

const PressPagePreview = ({ entry }) => (
	<Layout page="/press" isPreview>
		<Press
			pressList={entry
				.getIn(['data', 'pressList'])
				.toJS()
				.map(({ title, date, url, screenshot, color }) => ({
					title,
					date,
					url,
					color,
					file: '',
					screenshot: screenshot,
				}))}
		/>
	</Layout>
)

PressPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
}

export default PressPagePreview
