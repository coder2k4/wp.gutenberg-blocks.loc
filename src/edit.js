/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {useBlockProps, RichText, BlockControls, AlignmentToolbar} from '@wordpress/block-editor';

import {ToolbarGroup, ToolbarButton, ToolbarDropdownMenu} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	return (
		<>

			<BlockControls>
				<AlignmentToolbar/>
			</BlockControls>

			<BlockControls group={"inline"}>
				<p>Inline controls</p>
			</BlockControls>
			<BlockControls group={"block"}>
				<p>Block Controls</p>
			</BlockControls>
			<BlockControls
				group={"other"}
				controls={[
				{
					title: "Button 1",
					icon: "admin-generic",
					isAction: true,
					onClick: () => console.log("Button 1 click")
				},
				{
					title: "Button 2",
					icon: "admin-collapse",
					isAction: true,
					onClick: () => console.log("Button 1 click")
				}
			]}>

				<ToolbarGroup>

					<ToolbarButton title={"Align left"}
								   icon={"editor-alignleft"}
								   onClick={() => console.log("Align left")}
					/>

					<ToolbarButton title={"Align center"}
								   icon={"editor-aligncenter"}
								   onClick={() => console.log("Align center")}
					/>

					<ToolbarButton title={"Align right"}
								   icon={"editor-alignright"}
								   onClick={() => console.log("Align right")}
					/>

					<ToolbarDropdownMenu  icon={"arrow-down-alt2"}
								  label={__('More alignments', 'text-box')}
								  controls={[
									  {
										  title: __("Wide", 'text-box'),
										  icon: 'align-wide',
									  },
									  {
										  title: __("Full", 'text-box'),
										  icon: 'align-full-width',
									  }
								  ]}/>

				</ToolbarGroup>

			</BlockControls>

			<RichText {...useBlockProps()}
					  placeholder={__("Write text here")}
					  tagName="h4"
					  onChange={(value) => {
						  setAttributes({text: value});
					  }}
					  value={attributes.text}
					  allowedFormats={[]}
			/>
		</>

	);
}
