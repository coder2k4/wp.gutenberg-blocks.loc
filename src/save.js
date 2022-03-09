/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

import classnames from "classnames"

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {useBlockProps, RichText, getColorClassName} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param  root0
 * @param  root0.attributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {

	const backgroundClass = getColorClassName(
		'background-color',
		attributes.backgroundColor
	)

	const textClass = getColorClassName(
		'background-color',
		attributes.backgroundColor
	)

	const classes = classnames(
		`text-box-align-${attributes.alignment}`,
		{
			[textClass] : textClass,
			[backgroundClass]: backgroundClass
		}
	)

	return (
		<RichText.Content {...useBlockProps.save(
			{
				className: classes,
				style: {
					color: textClass ? undefined :  attributes.customTextColor,
					backgroundColor: backgroundClass ? undefined : attributes.customBackgroundColor
				}
			}
		)}
						  value={attributes.text}
						  tagName={"h4"}
		/>
	);
}
