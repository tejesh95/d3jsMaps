'use strict';

angular.module('client')
  .constant('countryList', [
  {id:'AFG_Afghanistan', value:'Afghanistan'},
  {id:'ALA_Åland Islands', value:'Åland Islands'},
  {id:'ALB_Albania', value:'Albania'},
  {id:'DZA_Algeria', value:'Algeria'},
  {id:'ASM_American Samoa', value:'American Samoa'},
  {id:'AND_Andorra', value:'Andorra'},
  {id:'AGO_Angola', value:'Angola'},
  {id:'AIA_Anguilla Island', value:'Anguilla Island'},
  {id:'ATA_Antarctica', value:'Antarctica'},
  {id:'ATG_Antigua and Barbuda', value:'Antigua and Barbuda'},
  {id:'ARG_Argentina', value:'Argentina'},
  {id:'ARM_Armenia', value:'Armenia'},
  {id:'ABW_Aruba', value:'Aruba'},
  {id:'AUS_Australia', value:'Australia'},
  {id:'AUT_Austria', value:'Austria'},
  {id:'AZE_Azerbaijan', value:'Azerbaijan'},
  {id:'BHS_Bahamas', value:'Bahamas'},
  {id:'BHR_Bahrain', value:'Bahrain'},
  {id:'BGD_Bangladesh', value:'Bangladesh'},
  {id:'BRB_Barbados', value:'Barbados'},
  {id:'BLR_Belarus', value:'Belarus'},
  {id:'BEL_Belgium', value:'Belgium'},
  {id:'BLZ_Belize', value:'Belize'},
  {id:'BEN_Benin', value:'Benin'},
  {id:'BMU_Bermuda', value:'Bermuda'},
  {id:'BTN_Bhutan', value:'Bhutan'},
  {id:'BOL_Bolivia', value:'Bolivia'},
  {id:'BIH_Bosnia and Herzegovina', value:'Bosnia and Herzegovina'},
  {id:'BWA_Botswana', value:'Botswana'},
  {id:'BVT_Bouvet Island', value:'Bouvet Island'},
  {id:'BRA_Brazil', value:'Brazil'},
  {id:'IOT_British Indian Ocean Territory', value:'British Indian Ocean Territory'},
  {id:'VGB_British Virgin Islands', value:'British Virgin Islands'},
  {id:'BRN_Brunei Darussalam', value:'Brunei Darussalam'},
  {id:'BGR_Bulgaria', value:'Bulgaria'},
  {id:'BFA_Burkina Faso', value:'Burkina Faso'},
  {id:'BDI_Burundi', value:'Burundi'},
  {id:'KHM_Cambodia', value:'Cambodia'},
  {id:'CMR_Cameroon', value:'Cameroon'},
  {id:'CAN_Canada', value:'Canada'},
  {id:'CPV_Cape Verde', value:'Cape Verde'},
  {id:'CYM_Cayman Islands', value:'Cayman Islands'},
  {id:'CAF_Central African Republic', value:'Central African Republic'},
  {id:'TCD_Chad', value:'Chad'},
  {id:'CHL_Chile', value:'Chile'},
  {id:'CHN_China', value:'China'},
  {id:'CXR_Christmas Island', value:'Christmas Island'},
  {id:'CCK_Cocos Islands', value:'Cocos Islands'},
  {id:'COL_Colombia', value:'Colombia'},
  {id:'COM_Comoros', value:'Comoros'},
  {id:'COG_Congo,Republic of', value:'Congo,Republic of'},
  {id:'COD_Congo,The Democratic Republic of the', value:'Congo,The Democratic Republic of the'},
  {id:'COK_Cook Islands', value:'Cook Islands'},
  {id:'CRI_Costa Rica', value:'Costa Rica'},
  {id:'CIV_Côte d\'Ivoire', value:'Côte d\'Ivoire'},
  {id:'HRV_Croatia', value:'Croatia'},
  {id:'CUB_Cuba', value:'Cuba'},
  {id:'CYP_Cyprus', value:'Cyprus'},
  {id:'CZE_Czech Republic', value:'Czech Republic'},
  {id:'DNK_Denmark', value:'Denmark'},
  {id:'DJI_Djibouti', value:'Djibouti'},
  {id:'DMA_Dominica', value:'Dominica'},
  {id:'DOM_Dominican Republic', value:'Dominican Republic'},
  {id:'ECU_Ecuador', value:'Ecuador'},
  {id:'EGY_Egypt', value:'Egypt'},
  {id:'SLV_El Salvador', value:'El Salvador'},
  {id:'GNQ_Equatorial Guinea', value:'Equatorial Guinea'},
  {id:'ERI_Eritrea', value:'Eritrea'},
  {id:'EST_Estonia', value:'Estonia'},
  {id:'ETH_Ethiopia', value:'Ethiopia'},
  {id:'FLK_Falkland Islands', value:'Falkland Islands'},
  {id:'FRO_Faroe Islands', value:'Faroe Islands'},
  {id:'FJI_Fiji', value:'Fiji'},
  {id:'FIN_Finland', value:'Finland'},
  {id:'FRA_France', value:'France'},
  {id:'GUF_French Guiana', value:'French Guiana'},
  {id:'PYF_French Polynesia', value:'French Polynesia'},
  {id:'ATF_French Southern Territories', value:'French Southern Territories'},
  {id:'GAB_Gabon', value:'Gabon'},
  {id:'GMB_Gambia', value:'Gambia'},
  {id:'GEO_Georgia', value:'Georgia'},
  {id:'DEU_Germany', value:'Germany'},
  {id:'GHA_Ghana', value:'Ghana'},
  {id:'GIB_Gibraltar', value:'Gibraltar'},
  {id:'GRC_Greece', value:'Greece'},
  {id:'GRL_Greenland', value:'Greenland'},
  {id:'GRD_Grenada', value:'Grenada'},
  {id:'GLP_Guadeloupe', value:'Guadeloupe'},
  {id:'GUM_Guam', value:'Guam'},
  {id:'GTM_Guatemala', value:'Guatemala'},
  {id:'GGY_Guernsey', value:'Guernsey'},
  {id:'GIN_Guinea', value:'Guinea'},
  {id:'GNB_Guinea-Bissau', value:'Guinea-Bissau'},
  {id:'GUY_Guyana', value:'Guyana'},
  {id:'HTI_Haiti', value:'Haiti'},
  {id:'HMD_Heard Island and McDonald Islands', value:'Heard Island and McDonald Islands'},
  {id:'HND_Honduras', value:'Honduras'},
  {id:'HKG_Hongkong', value:'Hongkong'},
  {id:'HUN_Hungary', value:'Hungary'},
  {id:'ISL_Iceland', value:'Iceland'},
  {id:'IND_India', value:'India'},
  {id:'IDN_Indonesia', value:'Indonesia'},
  {id:'IRN_Iran', value:'Iran'},
  {id:'IRQ_Iraq', value:'Iraq'},
  {id:'IRL_Ireland', value:'Ireland'},
  {id:'IMN_Isle of Man', value:'Isle of Man'},
  {id:'ISR_Israel', value:'Israel'},
  {id:'ITA_Italy', value:'Italy'},
  {id:'JAM_Jamaica', value:'Jamaica'},
  {id:'JEY_Jersey', value:'Jersey'},
  {id:'JPN_Japan', value:'Japan'},
  {id:'JOR_Jordan', value:'Jordan'},
  {id:'KAZ_Kazakhstan', value:'Kazakhstan'},
  {id:'KEN_Kenya', value:'Kenya'},
  {id:'KIR_Kiribati', value:'Kiribati'},
  {id:'KO-_Kosova', value:'Kosova'},
  {id:'KWT_Kuwait', value:'Kuwait'},
  {id:'KGZ_Kyrgyzstan', value:'Kyrgyzstan'},
  {id:'LAO_Laos', value:'Laos'},
  {id:'LVA_Latvia', value:'Latvia'},
  {id:'LBN_Lebanon', value:'Lebanon'},
  {id:'LSO_Lesotho', value:'Lesotho'},
  {id:'LBR_Liberia', value:'Liberia'},
  {id:'LBY_Libya', value:'Libya'},
  {id:'LIE_Liechtenstein', value:'Liechtenstein'},
  {id:'LTU_Lithuania', value:'Lithuania'},
  {id:'LUX_Luxembourg', value:'Luxembourg'},
  {id:'MAC_Macao', value:'Macao'},
  {id:'MKD_Macedonia', value:'Macedonia'},
  {id:'MDG_Madagascar', value:'Madagascar'},
  {id:'MWI_Malawi', value:'Malawi'},
  {id:'MYS_Malaysia', value:'Malaysia'},
  {id:'MDV_Maldives', value:'Maldives'},
  {id:'MLI_Mali', value:'Mali'},
  {id:'MLT_Malta', value:'Malta'},
  {id:'MHL_Marshall Islands', value:'Marshall Islands'},
  {id:'MTQ_Martinique', value:'Martinique'},
  {id:'MRT_Mauritania', value:'Mauritania'},
  {id:'MUS_Mauritius', value:'Mauritius'},
  {id:'MYT_Mayotte', value:'Mayotte'},
  {id:'MEX_Mexico', value:'Mexico'},
  {id:'FSM_Micronesia,Federated States of ', value:'Micronesia,Federated States of '},
  {id:'MDA_Moldova', value:'Moldova'},
  {id:'MCO_Monaco', value:'Monaco'},
  {id:'MNG_Mongolia', value:'Mongolia'},
  {id:'MNE_Montenegro', value:'Montenegro'},
  {id:'MSR_Montserrat', value:'Montserrat'},
  {id:'MAR_Morocco', value:'Morocco'},
  {id:'MOZ_Mozambique', value:'Mozambique'},
  {id:'MMR_Myanmar', value:'Myanmar'},
  {id:'NAM_Namibia', value:'Namibia'},
  {id:'NRU_Nauru', value:'Nauru'},
  {id:'NPL_Nepal', value:'Nepal'},
  {id:'NLD_Netherlands', value:'Netherlands'},
  {id:'ANT_Netherlands Antilles', value:'Netherlands Antilles'},
  {id:'NCL_New Caledonia', value:'New Caledonia'},
  {id:'NZL_New Zealand', value:'New Zealand'},
  {id:'NIC_Nicaragua', value:'Nicaragua'},
  {id:'NER_Niger', value:'Niger'},
  {id:'NGA_Nigeria', value:'Nigeria'},
  {id:'NIU_Niue', value:'Niue'},
  {id:'NFK_Norfolk Island', value:'Norfolk Island'},
  {id:'PRK_North Korea', value:'North Korea'},
  {id:'MNP_Northern Mariana Islands', value:'Northern Mariana Islands'},
  {id:'NOR_Norway', value:'Norway'},
  {id:'OMN_Oman', value:'Oman'},
  {id:'PAK_Pakistan', value:'Pakistan'},
  {id:'PLW_Palau', value:'Palau'},
  {id:'PSE_Palestina', value:'Palestina'},
  {id:'PAN_Panama', value:'Panama'},
  {id:'PNG_Papua New Guinea', value:'Papua New Guinea'},
  {id:'PRY_Paraguay', value:'Paraguay'},
  {id:'PER_Peru', value:'Peru'},
  {id:'PHL_Philippines', value:'Philippines'},
  {id:'PCN_Pitcairn Islands', value:'Pitcairn Islands'},
  {id:'POL_Poland', value:'Poland'},
  {id:'PRT_Portugal', value:'Portugal'},
  {id:'PRI_Puerto Rico', value:'Puerto Rico'},
  {id:'QAT_Qatar', value:'Qatar'},
  {id:'REU_Reunion', value:'Reunion'},
  {id:'ROU_Romania', value:'Romania'},
  {id:'RUS_Russian Federation', value:'Russian Federation'},
  {id:'RWA_Rwanda', value:'Rwanda'},
  {id:'SHN_Saint Helena', value:'Saint Helena'},
  {id:'KNA_Saint Kitts and Nevis', value:'Saint Kitts and Nevis'},
  {id:'SPM_Saint Pierre and Miquelon', value:'Saint Pierre and Miquelon'},
  {id:'VCT_Saint Vincent and the Grenadines', value:'Saint Vincent and the Grenadines'},
  {id:'WSM_Samoa', value:'Samoa'},
  {id:'SMR_San Marino', value:'San Marino'},
  {id:'LCA_Santa Lucia', value:'Santa Lucia'},
  {id:'STP_Sao Tome and Principe', value:'Sao Tome and Principe'},
  {id:'SAU_Saudi Arabia', value:'Saudi Arabia'},
  {id:'SEN_Senegal', value:'Senegal'},
  {id:'SRB_Serbia', value:'Serbia'},
  {id:'SYC_Seychelles', value:'Seychelles'},
  {id:'SLE_Sierra Leone', value:'Sierra Leone'},
  {id:'SGP_Singapore', value:'Singapore'},
  {id:'SVK_Slovakia', value:'Slovakia'},
  {id:'SVN_Slovenia', value:'Slovenia'},
  {id:'SLB_Solomon Islands', value:'Solomon Islands'},
  {id:'SOM_Somalia', value:'Somalia'},
  {id:'ZAF_South Africa', value:'South Africa'},
  {id:'SGS_South Georgia and the South Sandwich Islands', value:'South Georgia and the South Sandwich Islands'},
  {id:'KOR_South Korea', value:'South Korea'},
  {id:'ESP_Spain', value:'Spain'},
  {id:'LKA_Sri Lanka', value:'Sri Lanka'},
  {id:'SDN_Sudan', value:'Sudan'},
  {id:'SUR_Suriname', value:'Suriname'},
  {id:'SJM_Svalbard and Jan Mayen', value:'Svalbard and Jan Mayen'},
  {id:'SWZ_Swaziland', value:'Swaziland'},
  {id:'SWE_Sweden', value:'Sweden'},
  {id:'CHE_Switzerland', value:'Switzerland'},
  {id:'SYR_Syria', value:'Syria'},
  {id:'TWN_Taiwan', value:'Taiwan'},
  {id:'TJK_Tajikistan', value:'Tajikistan'},
  {id:'TZA_Tanzania', value:'Tanzania'},
  {id:'THA_Thailand', value:'Thailand'},
  {id:'TLS_Timor-Leste', value:'Timor-Leste'},
  {id:'TGO_Togo', value:'Togo'},
  {id:'TKL_Tokelau', value:'Tokelau'},
  {id:'TON_Tonga', value:'Tonga'},
  {id:'TTO_Trinidad and Tobago', value:'Trinidad and Tobago'},
  {id:'TUN_Tunisia', value:'Tunisia'},
  {id:'TUR_Turkey', value:'Turkey'},
  {id:'TKM_Turkmenistan', value:'Turkmenistan'},
  {id:'TCA_Turks and Caicos Islands', value:'Turks and Caicos Islands'},
  {id:'TUV_Tuvalu', value:'Tuvalu'},
  {id:'UGA_Uganda', value:'Uganda'},
  {id:'UKR_Ukraine', value:'Ukraine'},
  {id:'ARE_United Arab Emirates', value:'United Arab Emirates'},
  {id:'GBR_United Kingdom', value:'United Kingdom'},
  {id:'USA_United States', value:'United States'},
  {id:'UMI_United States Minor Outlying Island', value:'United States Minor Outlying Island'},
  {id:'URY_Uruguay', value:'Uruguay'},
  {id:'UZB_Uzbekistan', value:'Uzbekistan'},
  {id:'VUT_Vanuatu', value:'Vanuatu'},
  {id:'VAT_Vatican', value:'Vatican'},
  {id:'VEN_Venezuela', value:'Venezuela'},
  {id:'VNM_Vietnam', value:'Vietnam'},
  {id:'VIR_Virgin Islands,U.S', value:'Virgin Islands,U.S'},
  {id:'WLF_Wallis and Futuna', value:'Wallis and Futuna'},
  {id:'ESH_Western Sahara', value:'Western Sahara'},
  {id:'YEM_Yemen', value:'Yemen'},
  {id:'ZMB_Zambia', value:'Zambia'},
  {id:'ZWE_Zimbabwe', value:'Zimbabwe'}
]);