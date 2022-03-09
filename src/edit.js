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
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
	withColors
} from '@wordpress/block-editor';

import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
	PanelBody,
	TextControl,
	TextareaControl, ToggleControl, AnglePickerControl, ColorPicker, ColorPalette
} from '@wordpress/components';

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
 * @param  props
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit(props) {

	// Свойтсва
	/**
	 * backgroundColor1, textColor1, setTextColor, setBackgroundColor - получаем из HOC withColors
	 */
	const {attributes, setAttributes , backgroundColor, textColor, setTextColor, setBackgroundColor} = props

	// Цвет фона
	const backgroundColor1 = (value) => {
		setAttributes({backgroundColor: value})
	}

	// Цвет текста
	const textColor1 = (value) => {
		setAttributes({textColor: value})
	}




	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Color settings', 'text-box')}
					initialOpen={false}
					icon="admin--appearance">
					<p>Panel Body</p>


					<TextControl
						label={"Input label"}
						value={attributes.text}
						onChange={(value) => {
							setAttributes({text: value});
						}}
						help={"help text"}
					/>

					<TextareaControl
						label={"Text area label"}
						value={attributes.text}
						onChange={(value) => {
							setAttributes({text: value});
						}}
						help={"help text"}
					/>
					<ToggleControl
						label={"ToggleControl label"}
						cheacked={true}
						onChange={(value) => {
							console.log(value);
						}}
					/>
					<AnglePickerControl
						label={"AnglePickerControl label"}
						onChange={(value) => {
							console.log(value);
						}}
					/>
					<ColorPicker
						color={"F03"}
						onChange={textColor1}
					/>
					<ColorPalette
						colors={[
							{name: 'red', color: '#f00'},
							{name: 'green', color: '#0f0'},
							{name: 'blue', color: '#00f'},
						]}
						onChange={backgroundColor1}
						value={attributes.backgroundColor}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__('Color settings 2', 'text-box')}
					icon="admin--appearance"
					initialOpen
					colorSettings={
						[
							{
								value : backgroundColor.color,
								onChange : setBackgroundColor,
								label: __( 'Background Color' ),
							},
							{
								value: textColor.color,
								onChange: setTextColor,
								label: __( 'Text Color' ),
							},
						]
					}
				>
					<ContrastChecker textColor={attributes.textColor}
									 backgroundColor={attributes.backgroundColor}/>
				</PanelColorSettings>
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value={attributes.alignment}
					onChange={(value) => {
						setAttributes({alignment: value});
						console.log(attributes.alignment, value)
					}}/>
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

					<ToolbarDropdownMenu icon={"arrow-down-alt2"}
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

			<RichText {...useBlockProps({
				className: `text-box-align-${attributes.alignment}`,
				style: {
					color: textColor.color,
					backgroundColor: backgroundColor.color
				}
			})}
					  placeholder={__("Write text here")}
					  tagName="h4"
					  onChange={(value) => {
						  setAttributes({text: value});
					  }}
					  value={attributes.text}
					  allowedFormats={[]}
					  // style={{color: attributes.textColor, backgroundColor: attributes.backgroundColor}}
					// style={{textAlign: attributes.alignment}}
			/>
		</>

	);
}


export default withColors({
	backgroundColor: "backgroundColor",
	textColor: "color",
})(Edit)
