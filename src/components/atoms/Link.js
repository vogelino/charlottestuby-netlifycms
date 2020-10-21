import React from 'react'
import PropTypes from 'prop-types'
import { Link as InternalLink } from 'gatsby'

const Link = ({ children, href, className, ...rest }) => {
	if (href.startsWith('/')) {
		return (
			<InternalLink
				target="_self"
				to={href}
				className={className}
				{...rest}
			>
				{children}
			</InternalLink>
		)
	}
	return (
		<a
			rel="noopener noreferrer"
			target="_blank"
			href={href}
			className={className}
			{...rest}
		>
			{children}
		</a>
	)
}

Link.propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.node,
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.arrayOf(PropTypes.element),
	]),
}

export default Link