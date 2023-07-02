import React from 'react';

function Resume() {
    return (
        <>
        <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '@import url(https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98);ul.lst-kix_list_1-0{list-style-type:none}.lst-kix_list_3-0>li:before{content:"\\0025cf   "}ul.lst-kix_list_5-7{list-style-type:none}ul.lst-kix_list_9-3{list-style-type:none}ul.lst-kix_list_5-8{list-style-type:none}ul.lst-kix_list_9-4{list-style-type:none}.lst-kix_list_3-1>li:before{content:"o  "}.lst-kix_list_3-2>li:before{content:"\\0025aa   "}ul.lst-kix_list_5-5{list-style-type:none}ul.lst-kix_list_9-1{list-style-type:none}ul.lst-kix_list_5-6{list-style-type:none}ul.lst-kix_list_9-2{list-style-type:none}.lst-kix_list_8-1>li:before{content:"o  "}ul.lst-kix_list_9-7{list-style-type:none}ul.lst-kix_list_9-8{list-style-type:none}.lst-kix_list_8-2>li:before{content:"\\0025aa   "}ul.lst-kix_list_9-5{list-style-type:none}ul.lst-kix_list_9-6{list-style-type:none}ul.lst-kix_list_1-3{list-style-type:none}.lst-kix_list_3-5>li:before{content:"\\0025aa   "}ul.lst-kix_list_5-0{list-style-type:none}ul.lst-kix_list_1-4{list-style-type:none}ul.lst-kix_list_1-1{list-style-type:none}.lst-kix_list_3-4>li:before{content:"o  "}ul.lst-kix_list_1-2{list-style-type:none}ul.lst-kix_list_5-3{list-style-type:none}ul.lst-kix_list_1-7{list-style-type:none}.lst-kix_list_3-3>li:before{content:"\\0025cf   "}ul.lst-kix_list_5-4{list-style-type:none}ul.lst-kix_list_9-0{list-style-type:none}ul.lst-kix_list_1-8{list-style-type:none}ul.lst-kix_list_5-1{list-style-type:none}.lst-kix_list_8-0>li:before{content:"\\0025cf   "}ul.lst-kix_list_1-5{list-style-type:none}ul.lst-kix_list_5-2{list-style-type:none}ul.lst-kix_list_1-6{list-style-type:none}.lst-kix_list_8-7>li:before{content:"o  "}.lst-kix_list_3-8>li:before{content:"\\0025aa   "}.lst-kix_list_8-5>li:before{content:"\\0025aa   "}.lst-kix_list_8-6>li:before{content:"\\0025cf   "}.lst-kix_list_8-3>li:before{content:"\\0025cf   "}.lst-kix_list_3-6>li:before{content:"\\0025cf   "}.lst-kix_list_3-7>li:before{content:"o  "}.lst-kix_list_8-4>li:before{content:"o  "}.lst-kix_list_8-8>li:before{content:"\\0025aa   "}.lst-kix_list_5-0>li:before{content:"\\0025cf   "}.lst-kix_list_4-8>li:before{content:"\\0025aa   "}.lst-kix_list_5-3>li:before{content:"\\0025cf   "}.lst-kix_list_4-7>li:before{content:"o  "}.lst-kix_list_5-2>li:before{content:"\\0025aa   "}.lst-kix_list_5-1>li:before{content:"o  "}ul.lst-kix_list_4-8{list-style-type:none}.lst-kix_list_5-7>li:before{content:"o  "}ul.lst-kix_list_8-4{list-style-type:none}ul.lst-kix_list_8-5{list-style-type:none}ul.lst-kix_list_4-6{list-style-type:none}.lst-kix_list_5-6>li:before{content:"\\0025cf   "}.lst-kix_list_5-8>li:before{content:"\\0025aa   "}ul.lst-kix_list_8-2{list-style-type:none}ul.lst-kix_list_4-7{list-style-type:none}ul.lst-kix_list_8-3{list-style-type:none}ul.lst-kix_list_8-8{list-style-type:none}ul.lst-kix_list_8-6{list-style-type:none}ul.lst-kix_list_8-7{list-style-type:none}ul.lst-kix_list_4-0{list-style-type:none}ul.lst-kix_list_4-1{list-style-type:none}.lst-kix_list_5-4>li:before{content:"o  "}ul.lst-kix_list_4-4{list-style-type:none}.lst-kix_list_5-5>li:before{content:"\\0025aa   "}ul.lst-kix_list_8-0{list-style-type:none}ul.lst-kix_list_4-5{list-style-type:none}ul.lst-kix_list_8-1{list-style-type:none}ul.lst-kix_list_4-2{list-style-type:none}ul.lst-kix_list_4-3{list-style-type:none}.lst-kix_list_6-1>li:before{content:"o  "}.lst-kix_list_6-3>li:before{content:"\\0025cf   "}.lst-kix_list_6-0>li:before{content:"\\0025cf   "}.lst-kix_list_6-4>li:before{content:"o  "}.lst-kix_list_6-2>li:before{content:"\\0025aa   "}.lst-kix_list_6-8>li:before{content:"\\0025aa   "}.lst-kix_list_6-5>li:before{content:"\\0025aa   "}.lst-kix_list_6-7>li:before{content:"o  "}.lst-kix_list_7-0>li:before{content:"\\0025cf   "}.lst-kix_list_6-6>li:before{content:"\\0025cf   "}.lst-kix_list_2-6>li:before{content:"\\0025cf   "}.lst-kix_list_2-7>li:before{content:"o  "}.lst-kix_list_7-4>li:before{content:"o  "}.lst-kix_list_7-6>li:before{content:"\\0025cf   "}.lst-kix_list_2-4>li:before{content:"o  "}.lst-kix_list_2-5>li:before{content:"\\0025aa   "}.lst-kix_list_2-8>li:before{content:"\\0025aa   "}.lst-kix_list_7-1>li:before{content:"o  "}.lst-kix_list_7-5>li:before{content:"\\0025aa   "}.lst-kix_list_7-2>li:before{content:"\\0025aa   "}.lst-kix_list_7-3>li:before{content:"\\0025cf   "}ul.lst-kix_list_7-5{list-style-type:none}.lst-kix_list_10-0>li:before{content:"  "}ul.lst-kix_list_7-6{list-style-type:none}ul.lst-kix_list_7-3{list-style-type:none}ul.lst-kix_list_3-7{list-style-type:none}ul.lst-kix_list_7-4{list-style-type:none}ul.lst-kix_list_3-8{list-style-type:none}.lst-kix_list_10-1>li:before{content:"\\0025cf   "}ul.lst-kix_list_7-7{list-style-type:none}ul.lst-kix_list_7-8{list-style-type:none}ul.lst-kix_list_3-1{list-style-type:none}ul.lst-kix_list_3-2{list-style-type:none}.lst-kix_list_7-8>li:before{content:"\\0025aa   "}ul.lst-kix_list_3-0{list-style-type:none}ul.lst-kix_list_7-1{list-style-type:none}ul.lst-kix_list_3-5{list-style-type:none}ul.lst-kix_list_7-2{list-style-type:none}ul.lst-kix_list_3-6{list-style-type:none}ul.lst-kix_list_3-3{list-style-type:none}ul.lst-kix_list_7-0{list-style-type:none}.lst-kix_list_7-7>li:before{content:"o  "}ul.lst-kix_list_3-4{list-style-type:none}.lst-kix_list_10-7>li:before{content:"\\0025aa   "}.lst-kix_list_10-5>li:before{content:"\\0025cf   "}.lst-kix_list_10-4>li:before{content:"\\01f8ad   "}.lst-kix_list_10-8>li:before{content:"\\01f8ad   "}.lst-kix_list_4-0>li:before{content:"\\0025cf   "}.lst-kix_list_10-3>li:before{content:"\\0025aa   "}.lst-kix_list_4-1>li:before{content:"o  "}.lst-kix_list_10-2>li:before{content:"o  "}.lst-kix_list_4-4>li:before{content:"o  "}.lst-kix_list_9-2>li:before{content:"\\0025aa   "}.lst-kix_list_4-3>li:before{content:"\\0025cf   "}.lst-kix_list_4-5>li:before{content:"\\0025aa   "}.lst-kix_list_4-2>li:before{content:"\\0025aa   "}.lst-kix_list_4-6>li:before{content:"\\0025cf   "}.lst-kix_list_9-3>li:before{content:"\\0025cf   "}.lst-kix_list_9-0>li:before{content:"\\0025cf   "}.lst-kix_list_10-6>li:before{content:"o  "}.lst-kix_list_9-1>li:before{content:"o  "}.lst-kix_list_9-7>li:before{content:"o  "}.lst-kix_list_9-6>li:before{content:"\\0025cf   "}.lst-kix_list_9-4>li:before{content:"o  "}.lst-kix_list_9-5>li:before{content:"\\0025aa   "}ul.lst-kix_list_6-6{list-style-type:none}ul.lst-kix_list_6-7{list-style-type:none}ul.lst-kix_list_6-4{list-style-type:none}ul.lst-kix_list_2-8{list-style-type:none}ul.lst-kix_list_6-5{list-style-type:none}ul.lst-kix_list_6-8{list-style-type:none}ul.lst-kix_list_2-2{list-style-type:none}.lst-kix_list_1-0>li:before{content:"\\0025cf   "}ul.lst-kix_list_2-3{list-style-type:none}ul.lst-kix_list_2-0{list-style-type:none}ul.lst-kix_list_2-1{list-style-type:none}ul.lst-kix_list_6-2{list-style-type:none}.lst-kix_list_9-8>li:before{content:"\\0025aa   "}ul.lst-kix_list_2-6{list-style-type:none}ul.lst-kix_list_6-3{list-style-type:none}.lst-kix_list_1-1>li:before{content:"o  "}.lst-kix_list_1-2>li:before{content:"\\0025aa   "}ul.lst-kix_list_2-7{list-style-type:none}ul.lst-kix_list_6-0{list-style-type:none}ul.lst-kix_list_2-4{list-style-type:none}ul.lst-kix_list_6-1{list-style-type:none}ul.lst-kix_list_2-5{list-style-type:none}ul.lst-kix_list_10-0{list-style-type:none}.lst-kix_list_1-3>li:before{content:"\\0025cf   "}.lst-kix_list_1-4>li:before{content:"o  "}ul.lst-kix_list_10-8{list-style-type:none}ul.lst-kix_list_10-7{list-style-type:none}.lst-kix_list_1-7>li:before{content:"o  "}ul.lst-kix_list_10-6{list-style-type:none}ul.lst-kix_list_10-5{list-style-type:none}ul.lst-kix_list_10-4{list-style-type:none}ul.lst-kix_list_10-3{list-style-type:none}.lst-kix_list_1-5>li:before{content:"\\0025aa   "}.lst-kix_list_1-6>li:before{content:"\\0025cf   "}li.li-bullet-0:before{margin-left:-9pt;white-space:nowrap;display:inline-block;min-width:9pt}ul.lst-kix_list_10-2{list-style-type:none}ul.lst-kix_list_10-1{list-style-type:none}.lst-kix_list_2-0>li:before{content:"\\0025cf   "}.lst-kix_list_2-1>li:before{content:"o  "}.lst-kix_list_1-8>li:before{content:"\\0025aa   "}.lst-kix_list_2-2>li:before{content:"\\0025aa   "}.lst-kix_list_2-3>li:before{content:"\\0025cf   "}ol{margin:0;padding:0}table td,table th{padding:0}.c4{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:171.7pt;border-top-color:#000000;border-bottom-style:solid}.c46{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:middle;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:203.2pt;border-top-color:#000000;border-bottom-style:solid}.c34{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:514.8pt;border-top-color:#000000;border-bottom-style:solid}.c1{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:15.8pt;border-top-color:#000000;border-bottom-style:solid}.c45{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:middle;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:171.7pt;border-top-color:#000000;border-bottom-style:solid}.c48{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:middle;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:15.8pt;border-top-color:#000000;border-bottom-style:solid}.c32{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:middle;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:155.8pt;border-top-color:#000000;border-bottom-style:solid}.c10{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:171.6pt;border-top-color:#000000;border-bottom-style:solid}.c37{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:203.2pt;border-top-color:#000000;border-bottom-style:solid}.c9{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:155.8pt;border-top-color:#000000;border-bottom-style:solid}.c31{margin-left:12.6pt;padding-top:0pt;text-indent:-9pt;padding-bottom:10pt;line-height:1.0;orphans:2;widows:2;text-align:left}.c33{-webkit-text-decoration-skip:none;color:#000000;font-weight:700;text-decoration:underline;text-decoration-skip-ink:none;font-size:18pt;font-family:"Calibri"}.c15{margin-left:3.6pt;padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:center}.c13{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Calibri";font-style:normal}.c2{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Calibri";font-style:normal}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:left}.c23{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:right}.c19{color:#000000;font-weight:400;text-decoration:none;font-size:1pt;font-family:"Calibri";font-style:normal}.c16{color:#000000;font-weight:400;text-decoration:none;font-size:12pt;font-family:"Times New Roman";font-style:normal}.c22{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:center}.c43{padding-top:0pt;padding-bottom:10pt;line-height:1.0;orphans:2;widows:2;text-align:left}.c3{padding-top:0pt;padding-bottom:0pt;line-height:1.15;text-align:left;height:12pt}.c8{vertical-align:baseline;font-size:11pt;font-family:"Calibri";font-weight:700}.c29{margin-left:-5.4pt;border-spacing:0;border-collapse:collapse;margin-right:auto}.c20{-webkit-text-decoration-skip:none;color:#0000ff;text-decoration:underline;text-decoration-skip-ink:none}.c7{font-size:11pt;font-family:"Calibri";font-weight:400}.c24{color:#000000;text-decoration:none;font-style:normal}.c39{font-weight:400;font-size:4pt;font-family:"Calibri"}.c47{font-weight:400;font-size:11pt;font-family:"Arial"}.c6{font-size:10pt;font-family:"Calibri";font-weight:400}.c28{font-size:14pt;font-family:"Calibri";font-weight:700}.c35{font-size:11pt;font-family:"Calibri";font-weight:700}.c25{font-weight:400;font-size:5pt;font-family:"Calibri"}.c27{font-weight:400;font-size:14pt;font-family:"Calibri"}.c21{background-color:#ffffff;max-width:504pt;padding:54pt 54pt 54pt 54pt}.c40{background-color:#ffffff;color:#202124}.c49{background-color:#ffffff;font-style:italic}.c12{color:inherit;text-decoration:inherit}.c18{padding:0;margin:0}.c11{margin-left:21.6pt;padding-left:-9pt}.c14{vertical-align:baseline}.c36{height:6.3pt}.c44{height:6.6pt}.c17{height:0pt}.c30{height:12pt}.c41{height:14.2pt}.c42{height:34.6pt}.c38{page-break-after:avoid}.c26{height:3.5pt}.c5{height:10.5pt}.title{padding-top:24pt;color:#000000;font-weight:700;font-size:36pt;padding-bottom:6pt;font-family:"Times New Roman";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:18pt;color:#666666;font-size:24pt;padding-bottom:4pt;font-family:"Georgia";line-height:1.0;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:12pt;font-family:"Times New Roman"}p{margin:0;color:#000000;font-size:12pt;font-family:"Times New Roman"}h1{padding-top:12pt;color:#000000;font-weight:700;font-size:16pt;padding-bottom:3pt;font-family:"Arial";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:0pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:0pt;font-family:"Times New Roman";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:right}h3{padding-top:0pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:0pt;font-family:"Times New Roman";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:center}h4{padding-top:0pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:0pt;font-family:"Times New Roman";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:justify}h5{padding-top:0pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:0pt;font-family:"Times New Roman";line-height:1.0;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:justify}h6{padding-top:10pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:2pt;font-family:"Times New Roman";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}'
          }}
        />
        <p className="c3">
          <span className="c24 c14 c47" />
        </p>
        <a id="t.4332c381d40fb0c71f6fead79c1441d3143b4c74" />
        <a id="t.0" />
        <table className="c29">
          <tbody>
            <tr className="c36">
              <td className="c32" colSpan={1} rowSpan={1}>
                <p className="c0" id="h.gjdgxs">
                  <span className="c6 c14 c40">San Francisco, CA </span>
                  <span className="c20 c6 c14 c49">
                    <a
                      className="c12"
                      href="https://www.google.com/url?q=https://github.com/ranapp&sa=D&source=editors&ust=1688344428133957&usg=AOvVaw3jDnWc68F5dUIiR4aIvsy5"
                    >
                      https://github.com/ranapp
                    </a>
                  </span>
                </p>
              </td>
              <td className="c46" colSpan={3} rowSpan={1}>
                <p className="c22" id="h.30j0zll">
                  <span className="c14 c33">
                    <a
                      className="c12"
                      href="https://www.google.com/url?q=https://www.linkedin.com/in/aryaranadive/&sa=D&source=editors&ust=1688344428134849&usg=AOvVaw1rXXHjiq0lQ7UV0j3Z87cO"
                    >
                      Arya Ranadive
                    </a>
                  </span>
                </p>
              </td>
              <td className="c32" colSpan={1} rowSpan={1}>
                <p className="c23">
                  <span className="c24 c6 c14">(408) 477-6014</span>
                </p>
                <p className="c23">
                  <span className="c6 c14 c20">
                    <a className="c12" href="mailto:aryaaranadive@gmail.com">
                      aryaaranadive@gmail.com
                    </a>
                  </span>
                  <span className="c6 c14">&nbsp;</span>
                </p>
              </td>
            </tr>
            <tr className="c5">
              <td className="c34" colSpan={5} rowSpan={1}>
                <p className="c0 c30">
                  <span className="c8 c24" />
                </p>
                <p className="c43">
                  <span className="c28 c14">Education</span>
                </p>
              </td>
            </tr>
            <tr className="c41">
              <td className="c9" colSpan={1} rowSpan={1}>
                <p className="c0">
                  <span className="c8">B.S., Computer Science</span>
                </p>
              </td>
              <td className="c37" colSpan={3} rowSpan={1}>
                <p className="c22">
                  <span className="c8">University of California, Davis</span>
                </p>
              </td>
              <td className="c9" colSpan={1} rowSpan={1}>
                <h2 className="c23 c38">
                  <span className="c8">September 2019 – June 2023</span>
                </h2>
              </td>
            </tr>
            <tr className="c42">
              <td className="c34" colSpan={5} rowSpan={1}>
                <ul className="c18 lst-kix_list_5-0 start">
                  <li className="c0 c11 li-bullet-0">
                    <span className="c24 c6 c14">GPA: 3.64</span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c24 c6 c14">
                      Organizations: #include, Davis Women in Computer Science,
                      Unitrans, Davis Computer Science Club
                    </span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c24 c6 c14">
                      Relevant Coursework: Machine Learning, Web Development,
                      Human-Computer Interaction, Algorithm Design &amp; Analysis,
                      Computer Architecture, Computational Theory, Data and Web
                      Technologies for Data Analysis, Marketing for the Tech-based
                      Enterprise, Data Structures, Software Development in C++ &amp;
                      UNIX, Computational Linguistics
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="c17">
              <td className="c34" colSpan={5} rowSpan={1}>
                <p className="c43">
                  <span className="c28 c14">Experience</span>
                </p>
              </td>
            </tr>
            <tr className="c17">
              <td className="c9" colSpan={1} rowSpan={1}>
                <p className="c0">
                  <span className="c8">Software Engineer Intern</span>
                </p>
              </td>
              <td className="c37" colSpan={3} rowSpan={1}>
                <p className="c15">
                  <span className="c8">Travelers </span>
                </p>
              </td>
              <td className="c9" colSpan={1} rowSpan={1}>
                <p className="c23">
                  <span className="c8">June 2022 – September 2022</span>
                </p>
              </td>
            </tr>
            <tr className="c26">
              <td className="c34" colSpan={5} rowSpan={1}>
                <ul className="c18 lst-kix_list_5-0">
                  <li className="c0 c11 li-bullet-0">
                    <span className="c24 c6 c14">
                      Achieved efficiency by automating claims processes using
                      Automation Anywhere 360 platform by creating bots that handle a
                      specific claims process and specialized task bots to run unit
                      tests and validate code for other task bots created
                    </span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c6 c14 c24">
                      Developed an Outlook Add-In integral to the first stage of the
                      automation of an existing claims process
                    </span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c24 c6 c14">
                      Implemented Okta Authentication for a web application deployed
                      on AWS and collaborated with team for next steps for integration
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="c17">
              <td className="c10" colSpan={2} rowSpan={1}>
                <p className="c0">
                  <span className="c8">Resource Director</span>
                </p>
              </td>
              <td className="c4" colSpan={1} rowSpan={1}>
                <p className="c0">
                  <span className="c8">Davis Women in Computer Science</span>
                </p>
              </td>
              <td className="c10" colSpan={2} rowSpan={1}>
                <p className="c23">
                  <span className="c8">July 2022 – Present</span>
                </p>
              </td>
            </tr>
            <tr className="c17">
              <td className="c34" colSpan={5} rowSpan={1}>
                <ul className="c18 lst-kix_list_5-0">
                  <li className="c0 c11 li-bullet-0">
                    <span className="c24 c6 c14">
                      Helped new club members transition to a career in CS&nbsp;by
                      researching and compiling various resources and opportunities in
                      a weekly newsletter
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="c17">
              <td className="c10" colSpan={2} rowSpan={1}>
                <p className="c0">
                  <span className="c8">Frontend Developer</span>
                </p>
              </td>
              <td className="c4" colSpan={1} rowSpan={1}>
                <p className="c22">
                  <span className="c8">#include</span>
                </p>
              </td>
              <td className="c10" colSpan={2} rowSpan={1}>
                <p className="c23">
                  <span className="c8">October 2021 – June 2022</span>
                </p>
              </td>
            </tr>
            <tr className="c17">
              <td className="c34" colSpan={5} rowSpan={1}>
                <ul className="c18 lst-kix_list_5-0">
                  <li className="c0 c11 li-bullet-0">
                    <span className="c24 c6 c14">
                      Helped build websites and mobile applications for local
                      businesses in the Sacramento/Davis area to promote
                    </span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c24 c6 c14">
                      Worked with tools/technologies such as: HTML/CSS, React.js,
                      Node.js, Next.js, Javascript, and Git
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="c17">
              <td className="c10" colSpan={2} rowSpan={1}>
                <p className="c0">
                  <span className="c8">Undergraduate Research Intern</span>
                </p>
              </td>
              <td className="c4" colSpan={1} rowSpan={1}>
                <p className="c22">
                  <span className="c8">UC Davis Center for Mind/Brain</span>
                </p>
              </td>
              <td className="c10" colSpan={2} rowSpan={1}>
                <p className="c23">
                  <span className="c8">May 2020 – January 2022</span>
                </p>
              </td>
            </tr>
            <tr className="c17">
              <td className="c34" colSpan={5} rowSpan={1}>
                <ul className="c18 lst-kix_list_5-0">
                  <li className="c0 c11 li-bullet-0">
                    <span className="c24 c6 c14">
                      Collaborated and coded, using Python, on a research project
                      designed to study the effect of informational value on
                      attentional guidance and decision making
                    </span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c24 c6 c14">
                      Designed a cue stimulus and manipulated the orientation using
                      variances from a Gaussian distribution
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="c17">
              <td className="c34" colSpan={5} rowSpan={1}>
                <p className="c43">
                  <span className="c14 c28">Projects</span>
                </p>
              </td>
            </tr>
            <tr className="c44">
              <td className="c34" colSpan={5} rowSpan={1}>
                <ul className="c18 lst-kix_list_7-0 start">
                  <li className="c0 c11 li-bullet-0">
                    <span className="c35">Predicting Student Academic Success </span>
                    <span className="c7">(2023). </span>
                    <span className="c24 c6 c14">
                      Pre-processed, cleaned, and applied six different models on a
                      dataset and chose the best model (Logisitic Regression K-Fold)
                      to predict the academic success of a student (dropout or
                      graduate) based on various attributes. Created an interactive
                      frontend using Flask to display results. Python (Flask, Numpy,
                      scikit-learn, JupyterNotebooks, matplotlib)
                    </span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c35">ConGRADS Degree Check Website</span>
                    <span className="c8">&nbsp;</span>
                    <span className="c7 c14">(202</span>
                    <span className="c7">3</span>
                    <span className="c7 c14">).</span>
                    <span className="c6 c14">&nbsp;</span>
                    <span className="c6">Created the frontend</span>
                    <span className="c6 c14">&nbsp;using HCI c</span>
                    <span className="c6">oncepts </span>
                    <span className="c6 c14">where users can </span>
                    <span className="c6">
                      check their degree progress and view degree requirements based
                      on their college and major
                    </span>
                    <span className="c24 c6 c14">. React, Node, Express</span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c8">Web Scraping from Indeed.com </span>
                    <span className="c7 c14">(2022). </span>
                    <span className="c6 c14">
                      Data frame for users to view clean and processed information
                      from Indeed.com about current data scientist and related jobs.
                      R, XPath
                    </span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c8">Artruism Web App </span>
                    <span className="c7 c14">(2022). &nbsp;</span>
                    <span className="c6 c14">
                      Worked with a team to create professional-looking web pages to
                      increase web traffic for a local nonprofit. Javascript, Next.js,
                      CSS
                    </span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c8">
                      Effect of Informational Value on Attentional Guidance{" "}
                    </span>
                    <span className="c7 c14">(2021)</span>
                    <span className="c8">. </span>
                    <span className="c6 c14">
                      Designed and coded the experiment, collected data, and did the
                      data cleaning, data preprocessing, and data modeling on
                      between-subjects attentional guidance research dataset
                      collected. Python (Numpy, scikit-learn, JupyterNotebooks,
                      matplotlib)
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="c26">
              <td className="c34" colSpan={5} rowSpan={1}>
                <p className="c31">
                  <span className="c13">Languages and Technologies</span>
                </p>
              </td>
            </tr>
            <tr className="c26">
              <td className="c34" colSpan={5} rowSpan={1}>
                <ul className="c18 lst-kix_list_7-0">
                  <li className="c0 c11 li-bullet-0">
                    <span className="c2">
                      JavaScript, Python, C/C++, MATLAB, R, Intel x86 assembly, Java,
                      HTML/CSS, SQL, bash (Linux command line), Erlang, Haskell,
                      Prolog, XPath
                    </span>
                  </li>
                  <li className="c0 c11 li-bullet-0">
                    <span className="c7">
                      Node.js, React, Express, Scikit-Learn, Pandas, Flask,
                      Matplotlib, Statsmodels, JupyterNotebook, Scipy, Git, Automation
                      Anywhere 360, AWS (S3, Cloudfront, Lambda, Amplify), Microsoft
                      SQL Serve
                    </span>
                    <span className="c2">r</span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="c0 c30">
          <span className="c19 c14" />
        </p>
      </>
      
    );
}

export default Resume;