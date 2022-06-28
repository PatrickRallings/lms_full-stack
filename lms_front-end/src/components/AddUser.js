import React from 'react';

function AddUser() {
    return (
        <div>
            <form method="post" encType="multipart/form-data" target="gform_ajax_frame_1" id="gform_1">
                <div className="gform_body gform-body">
                    <ul id="gform_fields_1" className="gform_fields top_label form_sublabel_below description_below">
                        <li id="field_1_5"
                            className="gfield half-input field_sublabel_below field_description_below hidden_label gfield_visibility_visible"
                            data-js-reload="field_1_5"><label className="gfield_label" htmlFor="input_1_5">First
                            Name</label>
                            <div className="ginput_container ginput_container_text"><input name="input_5" id="input_1_5"
                                                                                           type="text" value=""
                                                                                           className="medium"
                                                                                           tabIndex="1"
                                                                                           placeholder="First Name"
                                                                                           aria-invalid="false"/></div>
                        </li>
                        <li id="field_1_3"
                            className="gfield half-input field_sublabel_below field_description_below hidden_label gfield_visibility_visible"
                            data-js-reload="field_1_3"><label className="gfield_label" htmlFor="input_1_3">Last
                            Name</label>
                            <div className="ginput_container ginput_container_text"><input name="input_3" id="input_1_3"
                                                                                           type="text" value=""
                                                                                           className="medium"
                                                                                           tabIndex="2"
                                                                                           placeholder="Last Name"
                                                                                           aria-invalid="false"/></div>
                        </li>
                        <li id="field_1_4"
                            className="gfield full-input gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible"
                            data-js-reload="field_1_4"><label className="gfield_label" htmlFor="input_1_4">Email<span
                            className="gfield_required"><span
                            className="gfield_required gfield_required_asterisk">*</span></span></label>
                            <div className="ginput_container ginput_container_email">
                                <input name="input_4" id="input_1_4" type="text" value="" className="medium"
                                       tabIndex="3" placeholder="Email*" aria-required="true" aria-invalid="false"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="gform_footer top_label"><input type="submit" id="gform_submit_button_1"
                                                               className="gform_button button" value="Submit"
                                                               tabIndex="4"
                                                               onClick="if(window[&quot;gf_submitting_1&quot;]){return false;}  window[&quot;gf_submitting_1&quot;]=true;  "
                                                               onKeyPress="if( event.keyCode == 13 ){ if(window[&quot;gf_submitting_1&quot;]){return false;} window[&quot;gf_submitting_1&quot;]=true;  jQuery(&quot;#gform_1&quot;).trigger(&quot;submit&quot;,[true]); }"/>
                    <input type="hidden" name="gform_ajax"
                           value="form_id=1&amp;title=&amp;description=&amp;tabindex=1"/>
                    <input type="hidden" className="gform_hidden" name="is_submit_1" value="1"/>
                    <input type="hidden" className="gform_hidden" name="gform_submit" value="1"/>

                    <input type="hidden" className="gform_hidden" name="gform_unique_id" value=""/>
                    <input type="hidden" className="gform_hidden" name="state_1"
                           value="WyJbXSIsIjI4NTMwZjBiNjNmMTk2NGIyYmFmNWZlYWEzZWIxYWExIl0="/>
                    <input type="hidden" className="gform_hidden" name="gform_target_page_number_1"
                           id="gform_target_page_number_1" value="0"/>
                    <input type="hidden" className="gform_hidden"
                           name="gform_source_page_number_1" id="gform_source_page_number_1"
                           value="1"/>
                    <input type="hidden" name="gform_field_values" value=""/>

                </div>
            </form>
        </div>
    );
}

export default AddUser;