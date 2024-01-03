export function score(xp:number, combat_total_xp:number, combat_min_xp:number, combat_max_xp:number,
                      combat_avg_xp:number, is_lowest_xp:number, avg_frac:number, avg_count:number) {
    ///
    /// Takes8 arguments
    /// xp, combat_total_xp, combat_min_xp, combat_max_xp, combat_avg_xp, is_lowest_xp,
    // avg_frac, avg_count, outputs a float representing predicted num.
    /// Not identical to python model, but close enough to be identical in practice
    /// (due to rounding)
    let input = [xp, combat_total_xp, combat_min_xp, combat_max_xp, combat_avg_xp,
    is_lowest_xp, avg_frac, avg_count]
    var var0;
    if (input[7] < 0.5080835) {
        if (input[7] < -0.43399307) {
            if (input[7] < -0.7823033) {
                if (input[7] < -0.88380086) {
                    if (input[7] < -0.98284286) {
                        var0 = -0.34512162;
                    } else {
                        if (input[3] < 6.108913) {
                            var0 = -0.31685844;
                        } else {
                            var0 = -0.022912575;
                        }
                    }
                } else {
                    if (input[1] < -0.2740602) {
                        var0 = -0.30800834;
                    } else {
                        if (input[6] < 1.4832127) {
                            var0 = -0.26195282;
                        } else {
                            var0 = 0.04063114;
                        }
                    }
                }
            } else {
                if (input[7] < -0.5956787) {
                    if (input[4] < -0.40690163) {
                        var0 = 0.27708745;
                    } else {
                        if (input[2] < -0.25191775) {
                            var0 = -0.2869411;
                        } else {
                            var0 = -0.23363416;
                        }
                    }
                } else {
                    if (input[4] < 0.020382801) {
                        if (input[2] < -0.25191775) {
                            var0 = -0.27607474;
                        } else {
                            var0 = -0.18096319;
                        }
                    } else {
                        if (input[6] < -0.07491647) {
                            var0 = -0.048853427;
                        } else {
                            var0 = -0.17126206;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 0.06545885) {
                if (input[2] < -0.25191775) {
                    if (input[1] < -0.33594856) {
                        if (input[3] < -0.31081644) {
                            var0 = -0.1259404;
                        } else {
                            var0 = 0.3694499;
                        }
                    } else {
                        if (input[6] < 0.3804174) {
                            var0 = -0.27059135;
                        } else {
                            var0 = 0.046435587;
                        }
                    }
                } else {
                    if (input[7] < -0.24002784) {
                        if (input[3] < 6.108913) {
                            var0 = -0.11326775;
                        } else {
                            var0 = 0.484903;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var0 = -0.060752824;
                        } else {
                            var0 = 0.030922955;
                        }
                    }
                }
            } else {
                if (input[4] < 0.04010295) {
                    if (input[5] < 0.89645296) {
                        if (input[7] < 0.16795768) {
                            var0 = -0.13861257;
                        } else {
                            var0 = 0.023966502;
                        }
                    } else {
                        if (input[1] < -0.0027035202) {
                            var0 = 0.10891913;
                        } else {
                            var0 = 0.4290143;
                        }
                    }
                } else {
                    if (input[2] < -0.18135624) {
                        if (input[6] < -0.19405304) {
                            var0 = -0.06845603;
                        } else {
                            var0 = 0.38290253;
                        }
                    } else {
                        if (input[0] < 0.42701507) {
                            var0 = 0.625437;
                        } else {
                            var0 = 0.1637811;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < 1.4277248) {
            if (input[5] < 0.89645296) {
                if (input[1] < -0.36995316) {
                    if (input[2] < -0.25191775) {
                        if (input[6] < -0.594532) {
                            var0 = 0.10544778;
                        } else {
                            var0 = -0.10528603;
                        }
                    } else {
                        if (input[3] < -0.40949714) {
                            var0 = 0.19303934;
                        } else {
                            var0 = -0.06955223;
                        }
                    }
                } else {
                    if (input[7] < 1.2230927) {
                        if (input[3] < 0.3525373) {
                            var0 = 0.2499962;
                        } else {
                            var0 = -0.014908644;
                        }
                    } else {
                        if (input[1] < 0.028580708) {
                            var0 = 0.6738019;
                        } else {
                            var0 = 0.06459094;
                        }
                    }
                }
            } else {
                if (input[7] < 1.061024) {
                    if (input[4] < -0.40354225) {
                        if (input[6] < 0.5132408) {
                            var0 = 0.53919715;
                        } else {
                            var0 = 0.014591445;
                        }
                    } else {
                        if (input[7] < 0.88544947) {
                            var0 = 0.30390906;
                        } else {
                            var0 = 0.51605076;
                        }
                    }
                } else {
                    if (input[4] < -0.21541551) {
                        if (input[3] < -0.19568892) {
                            var0 = 0.56625164;
                        } else {
                            var0 = 1.0829936;
                        }
                    } else {
                        if (input[7] < 1.2230927) {
                            var0 = 0.56747586;
                        } else {
                            var0 = 0.0621047;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 2.8045325) {
                if (input[5] < 0.89645296) {
                    if (input[1] < -0.250257) {
                        if (input[7] < 1.8501443) {
                            var0 = 0.19904362;
                        } else {
                            var0 = 0.5011734;
                        }
                    } else {
                        if (input[1] < 0.25029066) {
                            var0 = 0.94773537;
                        } else {
                            var0 = 0.34824505;
                        }
                    }
                } else {
                    if (input[4] < -0.40018284) {
                        if (input[4] < -0.40578184) {
                            var0 = 0.7253264;
                        } else {
                            var0 = 0.56354666;
                        }
                    } else {
                        if (input[6] < 0.8608831) {
                            var0 = 0.7829952;
                        } else {
                            var0 = 0.5061529;
                        }
                    }
                }
            } else {
                if (input[3] < -0.31081644) {
                    if (input[1] < -0.3495504) {
                        if (input[3] < -0.34371) {
                            var0 = 0.941419;
                        } else {
                            var0 = 1.5961615;
                        }
                    } else {
                        if (input[1] < -0.23801532) {
                            var0 = -0.007400132;
                        } else {
                            var0 = 0.8770875;
                        }
                    }
                } else {
                    if (input[3] < 1.3393445) {
                        if (input[1] < 0.028580708) {
                            var0 = 1.7665259;
                        } else {
                            var0 = 1.1587574;
                        }
                    } else {
                        if (input[4] < 1.055933) {
                            var0 = -0.18436886;
                        } else {
                            var0 = 0.8770875;
                        }
                    }
                }
            }
        }
    }
    var var1;
    if (input[7] < 0.5080835) {
        if (input[7] < -0.45000497) {
            if (input[7] < -0.7823033) {
                if (input[7] < -0.8777983) {
                    if (input[7] < -0.95559543) {
                        var1 = -0.24054268;
                    } else {
                        if (input[3] < 4.464234) {
                            var1 = -0.2213277;
                        } else {
                            var1 = 0.006642509;
                        }
                    }
                } else {
                    if (input[4] < 0.04010295) {
                        if (input[4] < -0.042965997) {
                            var1 = -0.20263447;
                        } else {
                            var1 = -0.2309334;
                        }
                    } else {
                        if (input[6] < 1.4207525) {
                            var1 = -0.17398155;
                        } else {
                            var1 = 0.30187678;
                        }
                    }
                }
            } else {
                if (input[7] < -0.64198405) {
                    if (input[4] < -0.40226245) {
                        if (input[4] < -0.40466204) {
                            var1 = 0.08261049;
                        } else {
                            var1 = -0.049770035;
                        }
                    } else {
                        if (input[2] < -0.20849527) {
                            var1 = -0.18467686;
                        } else {
                            var1 = -0.15418495;
                        }
                    }
                } else {
                    if (input[4] < 0.6711477) {
                        if (input[4] < -0.3684551) {
                            var1 = -0.18182145;
                        } else {
                            var1 = -0.12725052;
                        }
                    } else {
                        if (input[6] < -0.83312756) {
                            var1 = 0.21455887;
                        } else {
                            var1 = -0.09876213;
                        }
                    }
                }
            }
        } else {
            if (input[7] < -0.02155284) {
                if (input[5] < 0.89645296) {
                    if (input[3] < 2.2713292) {
                        if (input[6] < -0.33458266) {
                            var1 = -0.13179415;
                        } else {
                            var1 = -0.05423533;
                        }
                    } else {
                        if (input[7] < -0.4276074) {
                            var1 = 1.125845;
                        } else {
                            var1 = 0.05049629;
                        }
                    }
                } else {
                    if (input[6] < -0.7920803) {
                        if (input[1] < 1.3357173) {
                            var1 = 0.14833432;
                        } else {
                            var1 = -0.23193558;
                        }
                    } else {
                        if (input[7] < -0.19674025) {
                            var1 = -0.07525313;
                        } else {
                            var1 = 0.005331503;
                        }
                    }
                }
            } else {
                if (input[2] < -0.24648994) {
                    if (input[0] < -0.33756137) {
                        if (input[4] < -0.37442738) {
                            var1 = -0.038056575;
                        } else {
                            var1 = 0.14098267;
                        }
                    } else {
                        if (input[6] < 0.6924137) {
                            var1 = -0.09069646;
                        } else {
                            var1 = 0.25582075;
                        }
                    }
                } else {
                    if (input[3] < -0.2559938) {
                        if (input[0] < -0.21273255) {
                            var1 = 0.071207486;
                        } else {
                            var1 = -0.084824964;
                        }
                    } else {
                        if (input[7] < 0.19140512) {
                            var1 = 0.09203336;
                        } else {
                            var1 = 0.2789265;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < 1.5832454) {
            if (input[5] < 0.89645296) {
                if (input[2] < -0.20849527) {
                    if (input[1] < -0.42027995) {
                        if (input[7] < 0.5394694) {
                            var1 = 0.30430475;
                        } else {
                            var1 = -0.048319735;
                        }
                    } else {
                        if (input[0] < -0.29855236) {
                            var1 = 0.15615588;
                        } else {
                            var1 = 0.051511724;
                        }
                    }
                } else {
                    if (input[4] < 0.43566936) {
                        if (input[4] < -0.29436153) {
                            var1 = 0.045217294;
                        } else {
                            var1 = 0.44051772;
                        }
                    } else {
                        if (input[3] < 5.2865734) {
                            var1 = -0.304646;
                        } else {
                            var1 = -0.027568389;
                        }
                    }
                }
            } else {
                if (input[7] < 1.1771548) {
                    if (input[4] < -0.13702936) {
                        if (input[1] < -0.42776096) {
                            var1 = 0.08848898;
                        } else {
                            var1 = 0.22999503;
                        }
                    } else {
                        if (input[7] < 0.6268939) {
                            var1 = 0.18657029;
                        } else {
                            var1 = 0.60100055;
                        }
                    }
                } else {
                    if (input[1] < 0.63658285) {
                        if (input[1] < -0.01630536) {
                            var1 = 0.39518234;
                        } else {
                            var1 = 0.99329287;
                        }
                    } else {
                        if (input[3] < 0.24289207) {
                            var1 = 0.41777173;
                        } else {
                            var1 = -0.2201557;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 3.0238564) {
                if (input[4] < -0.40226245) {
                    if (input[5] < 0.89645296) {
                        if (input[2] < -0.25191775) {
                            var1 = -0.24564709;
                        } else {
                            var1 = 0.12417473;
                        }
                    } else {
                        if (input[1] < -0.42844105) {
                            var1 = 0.55863786;
                        } else {
                            var1 = 0.34657067;
                        }
                    }
                } else {
                    if (input[4] < 0.25714093) {
                        if (input[1] < -0.398517) {
                            var1 = 0.59494734;
                        } else {
                            var1 = 0.45714974;
                        }
                    } else {
                        if (input[4] < 0.45621684) {
                            var1 = 1.3666663;
                        } else {
                            var1 = 0.38105062;
                        }
                    }
                }
            } else {
                if (input[3] < 1.3393445) {
                    if (input[3] < -0.2559938) {
                        if (input[5] < 0.89645296) {
                            var1 = 0.36578298;
                        } else {
                            var1 = 0.8473451;
                        }
                    } else {
                        if (input[1] < 0.104751006) {
                            var1 = 1.551165;
                        } else {
                            var1 = 0.77704084;
                        }
                    }
                } else {
                    if (input[1] < 0.5903366) {
                        var1 = 0.0047427537;
                    } else {
                        var1 = -0.19367634;
                    }
                }
            }
        }
    }
    var var2;
    if (input[7] < 0.3227108) {
        if (input[7] < -0.3790574) {
            if (input[7] < -0.70045036) {
                if (input[7] < -0.8641562) {
                    if (input[7] < -0.98284286) {
                        var2 = -0.16961375;
                    } else {
                        if (input[5] < 0.89645296) {
                            var2 = -0.14173426;
                        } else {
                            var2 = -0.1591287;
                        }
                    }
                } else {
                    if (input[4] < 0.04010295) {
                        if (input[2] < 0.28543535) {
                            var2 = -0.1366786;
                        } else {
                            var2 = -0.19765049;
                        }
                    } else {
                        if (input[4] < 0.3699975) {
                            var2 = -0.06567091;
                        } else {
                            var2 = -0.14002702;
                        }
                    }
                }
            } else {
                if (input[2] < -0.25191775) {
                    if (input[1] < -0.4175596) {
                        if (input[7] < -0.5640289) {
                            var2 = 0.09578228;
                        } else {
                            var2 = -0.14108492;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var2 = 0.02123463;
                        } else {
                            var2 = -0.16460069;
                        }
                    }
                } else {
                    if (input[1] < -0.01630536) {
                        if (input[3] < -0.009292) {
                            var2 = -0.091101766;
                        } else {
                            var2 = -0.15422654;
                        }
                    } else {
                        if (input[0] < 0.10714126) {
                            var2 = 0.0040971586;
                        } else {
                            var2 = -0.10357917;
                        }
                    }
                }
            }
        } else {
            if (input[2] < -0.25191775) {
                if (input[4] < -0.30499965) {
                    if (input[0] < -0.34926406) {
                        if (input[1] < -0.11695896) {
                            var2 = -0.004948747;
                        } else {
                            var2 = 1.0513227;
                        }
                    } else {
                        if (input[7] < 0.19140512) {
                            var2 = -0.12029188;
                        } else {
                            var2 = 0.07750577;
                        }
                    }
                } else {
                    if (input[6] < 0.25636658) {
                        if (input[0] < 0.42701507) {
                            var2 = -0.17910938;
                        } else {
                            var2 = -0.02421701;
                        }
                    } else {
                        if (input[4] < -0.27812442) {
                            var2 = 0.29702857;
                        } else {
                            var2 = -0.040502653;
                        }
                    }
                }
            } else {
                if (input[7] < -0.011301813) {
                    if (input[3] < 0.0784242) {
                        if (input[0] < -0.29855236) {
                            var2 = -0.010185593;
                        } else {
                            var2 = -0.066889636;
                        }
                    } else {
                        if (input[4] < -0.24194619) {
                            var2 = 0.8917942;
                        } else {
                            var2 = 0.027980918;
                        }
                    }
                } else {
                    if (input[1] < -0.31826618) {
                        if (input[1] < -0.39307627) {
                            var2 = 0.059850283;
                        } else {
                            var2 = -0.053637724;
                        }
                    } else {
                        if (input[1] < -0.31690598) {
                            var2 = 0.52478594;
                        } else {
                            var2 = 0.06973763;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < 1.2230927) {
            if (input[5] < 0.89645296) {
                if (input[0] < 0.54404205) {
                    if (input[4] < -0.20123135) {
                        if (input[7] < 0.534977) {
                            var2 = -0.038121566;
                        } else {
                            var2 = 0.06555166;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var2 = -0.16713014;
                        } else {
                            var2 = 0.29128602;
                        }
                    }
                } else {
                    if (input[3] < 0.3525373) {
                        var2 = -0.42668208;
                    } else {
                        if (input[1] < 0.00817795) {
                            var2 = 0.24551684;
                        } else {
                            var2 = -0.23220149;
                        }
                    }
                }
            } else {
                if (input[3] < 0.5170052) {
                    if (input[1] < -0.38015452) {
                        if (input[6] < -0.39898378) {
                            var2 = 0.27151424;
                        } else {
                            var2 = 0.094327755;
                        }
                    } else {
                        if (input[0] < -0.12691276) {
                            var2 = 0.23576023;
                        } else {
                            var2 = -0.038253978;
                        }
                    }
                } else {
                    if (input[3] < 1.3393445) {
                        if (input[1] < 0.15779817) {
                            var2 = -0.21285759;
                        } else {
                            var2 = 1.0222576;
                        }
                    } else {
                        if (input[6] < 0.043039475) {
                            var2 = -0.14122763;
                        } else {
                            var2 = 0.534749;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 2.5736654) {
                if (input[5] < 0.89645296) {
                    if (input[4] < -0.39010462) {
                        if (input[1] < -0.42232025) {
                            var2 = 0.13288818;
                        } else {
                            var2 = -0.15881185;
                        }
                    } else {
                        if (input[7] < 1.8906171) {
                            var2 = 0.18730411;
                        } else {
                            var2 = 0.55045575;
                        }
                    }
                } else {
                    if (input[0] < -0.048894748) {
                        if (input[1] < -0.3386689) {
                            var2 = 0.31843632;
                        } else {
                            var2 = 0.4409022;
                        }
                    } else {
                        if (input[1] < -0.32098654) {
                            var2 = 0.007239658;
                        } else {
                            var2 = -0.2695085;
                        }
                    }
                }
            } else {
                if (input[4] < -0.40130264) {
                    if (input[6] < 1.1517857) {
                        if (input[6] < 0.46406695) {
                            var2 = 0.25163114;
                        } else {
                            var2 = -0.19178967;
                        }
                    } else {
                        if (input[6] < 1.7796307) {
                            var2 = 0.705791;
                        } else {
                            var2 = 0.18281619;
                        }
                    }
                } else {
                    if (input[1] < -0.4148392) {
                        if (input[1] < -0.4168795) {
                            var2 = 0.70861906;
                        } else {
                            var2 = 1.3265703;
                        }
                    } else {
                        if (input[4] < -0.34307292) {
                            var2 = 0.33995262;
                        } else {
                            var2 = 0.65022254;
                        }
                    }
                }
            }
        }
    }
    var var3;
    if (input[7] < 0.6728593) {
        if (input[7] < -0.24002784) {
            if (input[7] < -0.5956787) {
                if (input[7] < -0.84411055) {
                    if (input[7] < -0.95559543) {
                        var3 = -0.11831927;
                    } else {
                        if (input[4] < 3.6508875) {
                            var3 = -0.107758716;
                        } else {
                            var3 = -0.010997079;
                        }
                    }
                } else {
                    if (input[4] < -0.21541551) {
                        if (input[1] < -0.40531793) {
                            var3 = -0.06514471;
                        } else {
                            var3 = -0.10579726;
                        }
                    } else {
                        if (input[1] < 0.15779817) {
                            var3 = -0.059749056;
                        } else {
                            var3 = -0.096626885;
                        }
                    }
                }
            } else {
                if (input[3] < 4.464234) {
                    if (input[2] < -0.25191775) {
                        if (input[6] < 0.3436074) {
                            var3 = -0.12390521;
                        } else {
                            var3 = 0.02150175;
                        }
                    } else {
                        if (input[1] < -0.3917161) {
                            var3 = -0.08391747;
                        } else {
                            var3 = -0.041929226;
                        }
                    }
                } else {
                    if (input[0] < 1.0511591) {
                        if (input[6] < -1.0279069) {
                            var3 = -0.13949873;
                        } else {
                            var3 = 0.38298184;
                        }
                    } else {
                        if (input[2] < 0.28543535) {
                            var3 = -0.21487269;
                        } else {
                            var3 = 0.0053573838;
                        }
                    }
                }
            }
        } else {
            if (input[2] < -0.18135624) {
                if (input[7] < 0.17264716) {
                    if (input[0] < -0.29855236) {
                        if (input[4] < -0.3884249) {
                            var3 = -0.06931427;
                        } else {
                            var3 = 0.010910777;
                        }
                    } else {
                        if (input[4] < -0.011611541) {
                            var3 = -0.09621148;
                        } else {
                            var3 = 0.05944259;
                        }
                    }
                } else {
                    if (input[0] < -0.17372355) {
                        if (input[4] < -0.18331452) {
                            var3 = 0.032913864;
                        } else {
                            var3 = 0.13466705;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var3 = 0.10838903;
                        } else {
                            var3 = -0.116678394;
                        }
                    }
                }
            } else {
                if (input[1] < 0.00817795) {
                    if (input[0] < 0.81710505) {
                        if (input[6] < -1.3329476) {
                            var3 = 0.575296;
                        } else {
                            var3 = 0.03493403;
                        }
                    } else {
                        if (input[6] < 0.14970104) {
                            var3 = -0.118586145;
                        } else {
                            var3 = -0.33467108;
                        }
                    }
                } else {
                    if (input[0] < 0.036925055) {
                        if (input[4] < -0.089251146) {
                            var3 = 1.4050965;
                        } else {
                            var3 = 0.3417775;
                        }
                    } else {
                        if (input[1] < 0.3237406) {
                            var3 = -0.12881936;
                        } else {
                            var3 = 0.10835346;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < 2.2086458) {
            if (input[4] < -0.36248282) {
                if (input[1] < -0.398517) {
                    if (input[3] < -0.4314262) {
                        if (input[7] < 1.5558425) {
                            var3 = 0.07485417;
                        } else {
                            var3 = 0.18735012;
                        }
                    } else {
                        if (input[4] < -0.3856254) {
                            var3 = -0.17639929;
                        } else {
                            var3 = 0.44165403;
                        }
                    }
                } else {
                    if (input[6] < -1.0725769) {
                        if (input[5] < 0.89645296) {
                            var3 = 1.3839536;
                        } else {
                            var3 = 0.043300226;
                        }
                    } else {
                        if (input[6] < 0.60563) {
                            var3 = -0.15822396;
                        } else {
                            var3 = 0.11689351;
                        }
                    }
                }
            } else {
                if (input[4] < -0.35927713) {
                    if (input[3] < -0.31081644) {
                        if (input[7] < 1.8294723) {
                            var3 = 0.24493113;
                        } else {
                            var3 = 0.84465235;
                        }
                    } else {
                        var3 = 1.6345634;
                    }
                } else {
                    if (input[3] < 1.7779255) {
                        if (input[3] < 0.5170052) {
                            var3 = 0.18378922;
                        } else {
                            var3 = 0.5310343;
                        }
                    } else {
                        if (input[4] < 1.3814222) {
                            var3 = -0.3764995;
                        } else {
                            var3 = 0.26517218;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 3.248952) {
                if (input[4] < -0.3777868) {
                    if (input[1] < -0.4100786) {
                        if (input[4] < -0.40018284) {
                            var3 = 0.23405553;
                        } else {
                            var3 = 0.4125592;
                        }
                    } else {
                        if (input[1] < -0.38763556) {
                            var3 = 0.05483798;
                        } else {
                            var3 = -0.30978772;
                        }
                    }
                } else {
                    if (input[1] < -0.38491517) {
                        if (input[0] < -0.34536317) {
                            var3 = 0.3542795;
                        } else {
                            var3 = 0.9732248;
                        }
                    } else {
                        if (input[6] < 0.78198916) {
                            var3 = 0.32277817;
                        } else {
                            var3 = 0.029524714;
                        }
                    }
                }
            } else {
                if (input[4] < 0.25714093) {
                    if (input[1] < 0.104751006) {
                        if (input[6] < 0.46406695) {
                            var3 = 0.94617045;
                        } else {
                            var3 = 0.434377;
                        }
                    } else {
                        if (input[1] < 0.23532864) {
                            var3 = -0.6162236;
                        } else {
                            var3 = -0.09350202;
                        }
                    }
                } else {
                    var3 = 1.2301346;
                }
            }
        }
    }
    var var4;
    if (input[7] < 0.81429857) {
        if (input[7] < -0.14663717) {
            if (input[7] < -0.6961423) {
                if (input[7] < -0.92781955) {
                    if (input[7] < -0.98284286) {
                        var4 = -0.08332795;
                    } else {
                        if (input[5] < 0.89645296) {
                            var4 = -0.061192214;
                        } else {
                            var4 = -0.08109677;
                        }
                    }
                } else {
                    if (input[1] < -0.30466434) {
                        if (input[1] < -0.3658726) {
                            var4 = -0.06866969;
                        } else {
                            var4 = -0.09361405;
                        }
                    } else {
                        if (input[0] < 0.10714126) {
                            var4 = -0.04470945;
                        } else {
                            var4 = -0.07334334;
                        }
                    }
                }
            } else {
                if (input[1] < 6.3983216) {
                    if (input[5] < 0.89645296) {
                        if (input[6] < -0.23167802) {
                            var4 = -0.068179;
                        } else {
                            var4 = -0.019117376;
                        }
                    } else {
                        if (input[6] < -0.33531734) {
                            var4 = 0.026495798;
                        } else {
                            var4 = -0.052146487;
                        }
                    }
                } else {
                    if (input[0] < 2.8455732) {
                        if (input[3] < 3.6418948) {
                            var4 = -0.09302223;
                        } else {
                            var4 = 0.4164458;
                        }
                    } else {
                        if (input[6] < -0.40693426) {
                            var4 = 0.08744072;
                        } else {
                            var4 = -0.15620613;
                        }
                    }
                }
            }
        } else {
            if (input[2] < -0.25191775) {
                if (input[4] < -0.30011326) {
                    if (input[1] < -0.11695896) {
                        if (input[7] < 0.5394694) {
                            var4 = 0.012032101;
                        } else {
                            var4 = -0.14150713;
                        }
                    } else {
                        if (input[7] < 0.11262171) {
                            var4 = -0.078321956;
                        } else {
                            var4 = 0.61541814;
                        }
                    }
                } else {
                    if (input[6] < -1.0831373) {
                        if (input[7] < 0.19140512) {
                            var4 = 0.27090743;
                        } else {
                            var4 = -0.20146926;
                        }
                    } else {
                        if (input[6] < 0.16973469) {
                            var4 = -0.15250136;
                        } else {
                            var4 = 0.020189635;
                        }
                    }
                }
            } else {
                if (input[3] < -0.009292) {
                    if (input[0] < -0.21273255) {
                        if (input[4] < -0.30499965) {
                            var4 = 0.01701779;
                        } else {
                            var4 = 0.09704403;
                        }
                    } else {
                        if (input[4] < -0.280364) {
                            var4 = -0.1257091;
                        } else {
                            var4 = 0.0029078908;
                        }
                    }
                } else {
                    if (input[0] < 0.54404205) {
                        if (input[0] < -0.29855236) {
                            var4 = -0.004590966;
                        } else {
                            var4 = 0.18493499;
                        }
                    } else {
                        if (input[4] < 0.5691924) {
                            var4 = -0.2150464;
                        } else {
                            var4 = 0.06562064;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < 2.2242022) {
            if (input[4] < -0.39906302) {
                if (input[6] < -0.36445907) {
                    if (input[5] < 0.89645296) {
                        if (input[0] < -0.34536317) {
                            var4 = 0.042272653;
                        } else {
                            var4 = -0.08492385;
                        }
                    } else {
                        if (input[6] < -0.594532) {
                            var4 = 0.46974587;
                        } else {
                            var4 = 1.1490448;
                        }
                    }
                } else {
                    if (input[7] < 0.9725973) {
                        if (input[7] < 0.8547546) {
                            var4 = 0.024550814;
                        } else {
                            var4 = 0.5543379;
                        }
                    } else {
                        if (input[7] < 1.4277248) {
                            var4 = -0.07920498;
                        } else {
                            var4 = 0.06683813;
                        }
                    }
                }
            } else {
                if (input[2] < -0.25191775) {
                    if (input[1] < -0.14144227) {
                        if (input[4] < -0.29436153) {
                            var4 = -0.038622074;
                        } else {
                            var4 = 0.5148543;
                        }
                    } else {
                        if (input[4] < -0.17062342) {
                            var4 = -0.5124025;
                        } else {
                            var4 = -0.1387408;
                        }
                    }
                } else {
                    if (input[6] < 0.45249978) {
                        if (input[3] < 1.3393445) {
                            var4 = 0.14605871;
                        } else {
                            var4 = -0.26830655;
                        }
                    } else {
                        if (input[0] < -0.33756137) {
                            var4 = 0.33447134;
                        } else {
                            var4 = 0.124885134;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 3.0238564) {
                if (input[1] < 1.1194482) {
                    if (input[4] < -0.11490756) {
                        if (input[3] < -0.07507915) {
                            var4 = 0.19360663;
                        } else {
                            var4 = 0.7565123;
                        }
                    } else {
                        if (input[4] < -0.05013273) {
                            var4 = -0.54844844;
                        } else {
                            var4 = 0.11692617;
                        }
                    }
                } else {
                    if (input[1] < 1.7886586) {
                        if (input[2] < -0.25191775) {
                            var4 = 0.24894397;
                        } else {
                            var4 = 0.96536523;
                        }
                    } else {
                        if (input[1] < 1.9341983) {
                            var4 = 0.02390063;
                        } else {
                            var4 = 0.22746612;
                        }
                    }
                }
            } else {
                if (input[3] < 1.3393445) {
                    if (input[4] < -0.06984124) {
                        if (input[1] < 0.1387556) {
                            var4 = 0.34974334;
                        } else {
                            var4 = -0.62450963;
                        }
                    } else {
                        var4 = 1.1291504;
                    }
                } else {
                    if (input[1] < 0.5903366) {
                        var4 = -0.079476714;
                    } else {
                        var4 = -0.3495412;
                    }
                }
            }
        }
    }
    var var5;
    if (input[7] < 0.3227108) {
        if (input[7] < -0.5455145) {
            if (input[4] < -0.40466204) {
                if (input[7] < -0.78776014) {
                    if (input[7] < -0.98284286) {
                        var5 = -0.05222009;
                    } else {
                        var5 = -0.09013732;
                    }
                } else {
                    if (input[6] < -0.52452344) {
                        if (input[0] < -0.34926406) {
                            var5 = -0.038645435;
                        } else {
                            var5 = 0.31970334;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var5 = 0.17701373;
                        } else {
                            var5 = -0.022534087;
                        }
                    }
                }
            } else {
                if (input[7] < -0.8641562) {
                    if (input[1] < -0.4257207) {
                        var5 = 0.10814891;
                    } else {
                        if (input[6] < 1.1517857) {
                            var5 = -0.057864964;
                        } else {
                            var5 = -0.052109722;
                        }
                    }
                } else {
                    if (input[1] < -0.26861945) {
                        if (input[1] < -0.4168795) {
                            var5 = -0.028004445;
                        } else {
                            var5 = -0.059558686;
                        }
                    } else {
                        if (input[0] < 0.20856465) {
                            var5 = -0.019079333;
                        } else {
                            var5 = -0.05217626;
                        }
                    }
                }
            }
        } else {
            if (input[1] < 1.9341983) {
                if (input[3] < 2.2713292) {
                    if (input[4] < -0.387865) {
                        if (input[6] < -1.0206758) {
                            var5 = -0.13422164;
                        } else {
                            var5 = -0.054755908;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var5 = -0.020919636;
                        } else {
                            var5 = 0.011140703;
                        }
                    }
                } else {
                    if (input[6] < -1.1579646) {
                        if (input[0] < -0.33756137) {
                            var5 = -0.14479654;
                        } else {
                            var5 = 1.1990566;
                        }
                    } else {
                        if (input[4] < 0.25714093) {
                            var5 = -0.29955044;
                        } else {
                            var5 = 0.10653121;
                        }
                    }
                }
            } else {
                if (input[1] < 6.3983216) {
                    if (input[7] < -0.12748012) {
                        if (input[2] < -0.20849527) {
                            var5 = -0.13959953;
                        } else {
                            var5 = 0.028615532;
                        }
                    } else {
                        if (input[2] < -0.24648994) {
                            var5 = -0.059381105;
                        } else {
                            var5 = -0.3037117;
                        }
                    }
                } else {
                    if (input[6] < -0.7141563) {
                        if (input[0] < 0.10714126) {
                            var5 = 0.4613626;
                        } else {
                            var5 = 0.09765945;
                        }
                    } else {
                        if (input[2] < 0.65452635) {
                            var5 = -0.09215526;
                        } else {
                            var5 = 0.13497378;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < 1.7161589) {
            if (input[1] < -0.11695896) {
                if (input[1] < -0.19448943) {
                    if (input[1] < -0.25569773) {
                        if (input[0] < -0.21273255) {
                            var5 = 0.055315964;
                        } else {
                            var5 = -0.04012497;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var5 = 0.34657422;
                        } else {
                            var5 = 0.093812816;
                        }
                    }
                } else {
                    if (input[6] < 0.5872202) {
                        if (input[4] < -0.21138422) {
                            var5 = 0.0029864276;
                        } else {
                            var5 = -0.33153385;
                        }
                    } else {
                        if (input[2] < -0.007666345) {
                            var5 = 0.2822941;
                        } else {
                            var5 = -0.10803681;
                        }
                    }
                }
            } else {
                if (input[2] < -0.24648994) {
                    if (input[4] < -0.30658054) {
                        if (input[6] < -0.6382811) {
                            var5 = 0.67568195;
                        } else {
                            var5 = -0.28194532;
                        }
                    } else {
                        if (input[1] < 3.6507502) {
                            var5 = -0.12796037;
                        } else {
                            var5 = 0.22891578;
                        }
                    }
                } else {
                    if (input[0] < -0.048894748) {
                        if (input[6] < -0.61894906) {
                            var5 = 0.090347596;
                        } else {
                            var5 = 0.37896737;
                        }
                    } else {
                        if (input[4] < 0.34224588) {
                            var5 = -0.08991279;
                        } else {
                            var5 = 0.13972032;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.40130264) {
                if (input[1] < -0.4243605) {
                    if (input[7] < 2.2086458) {
                        if (input[6] < 0.18851979) {
                            var5 = 0.11981987;
                        } else {
                            var5 = -0.029707098;
                        }
                    } else {
                        if (input[6] < 0.807752) {
                            var5 = 0.13164231;
                        } else {
                            var5 = 0.34205544;
                        }
                    }
                } else {
                    if (input[6] < 0.25509757) {
                        if (input[4] < -0.40466204) {
                            var5 = 0.054676153;
                        } else {
                            var5 = -0.5951827;
                        }
                    } else {
                        if (input[1] < -0.42027995) {
                            var5 = -0.1753077;
                        } else {
                            var5 = 0.45308498;
                        }
                    }
                }
            } else {
                if (input[7] < 3.248952) {
                    if (input[1] < -0.3917161) {
                        if (input[6] < 0.78198916) {
                            var5 = 0.12522683;
                        } else {
                            var5 = 0.36149347;
                        }
                    } else {
                        if (input[4] < -0.3777868) {
                            var5 = -0.26925468;
                        } else {
                            var5 = 0.12922852;
                        }
                    }
                } else {
                    if (input[4] < -0.38637194) {
                        if (input[6] < 1.1517857) {
                            var5 = 0.89824206;
                        } else {
                            var5 = 0.1895589;
                        }
                    } else {
                        if (input[1] < -0.30194396) {
                            var5 = -0.049038947;
                        } else {
                            var5 = 0.44434902;
                        }
                    }
                }
            }
        }
    }
    var var6;
    if (input[7] < 0.122625954) {
        if (input[7] < -0.32041907) {
            if (input[1] < -0.35499114) {
                if (input[7] < -0.51335806) {
                    if (input[7] < -0.5609973) {
                        if (input[4] < -0.40466204) {
                            var6 = 0.032213483;
                        } else {
                            var6 = -0.03996353;
                        }
                    } else {
                        if (input[1] < -0.3917161) {
                            var6 = -0.036843248;
                        } else {
                            var6 = 0.1264017;
                        }
                    }
                } else {
                    if (input[1] < -0.39715683) {
                        if (input[7] < -0.3457545) {
                            var6 = -0.098716095;
                        } else {
                            var6 = 0.17093162;
                        }
                    } else {
                        if (input[2] < -0.13793376) {
                            var6 = -0.004363188;
                        } else {
                            var6 = -0.095124476;
                        }
                    }
                }
            } else {
                if (input[0] < -0.048894748) {
                    if (input[4] < 0.7957657) {
                        if (input[4] < 0.45621684) {
                            var6 = -0.015203164;
                        } else {
                            var6 = -0.15529987;
                        }
                    } else {
                        if (input[4] < 1.055933) {
                            var6 = 0.3205179;
                        } else {
                            var6 = 0.023070673;
                        }
                    }
                } else {
                    if (input[4] < 0.020382801) {
                        if (input[7] < -0.6151869) {
                            var6 = -0.042899493;
                        } else {
                            var6 = -0.09211706;
                        }
                    } else {
                        if (input[0] < 0.036925055) {
                            var6 = 0.078386016;
                        } else {
                            var6 = -0.03283882;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.42776096) {
                if (input[6] < -0.9053535) {
                    var6 = 0.26636285;
                } else {
                    if (input[7] < -0.025550095) {
                        if (input[6] < 0.7405498) {
                            var6 = -0.22758207;
                        } else {
                            var6 = -0.014353419;
                        }
                    } else {
                        if (input[6] < -0.08877614) {
                            var6 = -0.10233863;
                        } else {
                            var6 = 0.13523781;
                        }
                    }
                }
            } else {
                if (input[5] < 0.89645296) {
                    if (input[2] < 0.82821625) {
                        if (input[7] < 0.032265052) {
                            var6 = -0.014089384;
                        } else {
                            var6 = -0.072558984;
                        }
                    } else {
                        if (input[1] < 0.43255532) {
                            var6 = 1.096182;
                        } else {
                            var6 = 0.059747655;
                        }
                    }
                } else {
                    if (input[6] < -1.1579646) {
                        if (input[7] < -0.06258773) {
                            var6 = 0.18447769;
                        } else {
                            var6 = 0.88564605;
                        }
                    } else {
                        if (input[4] < 0.88870925) {
                            var6 = 0.014585865;
                        } else {
                            var6 = -0.07490139;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < 1.2230927) {
            if (input[1] < 4.602879) {
                if (input[1] < 3.9649527) {
                    if (input[4] < 3.6508875) {
                        if (input[5] < 0.89645296) {
                            var6 = 0.003999761;
                        } else {
                            var6 = 0.044408083;
                        }
                    } else {
                        if (input[6] < 0.7829106) {
                            var6 = 0.45855606;
                        } else {
                            var6 = -0.21322253;
                        }
                    }
                } else {
                    if (input[0] < -0.31805685) {
                        var6 = 1.0973752;
                    } else {
                        if (input[0] < -0.26734516) {
                            var6 = 0.033762682;
                        } else {
                            var6 = -0.27345774;
                        }
                    }
                }
            } else {
                if (input[6] < 0.1420343) {
                    var6 = -0.35814437;
                } else {
                    var6 = -0.100656085;
                }
            }
        } else {
            if (input[3] < -0.07507915) {
                if (input[1] < -0.057110872) {
                    if (input[6] < -0.11035498) {
                        if (input[4] < -0.40466204) {
                            var6 = 0.55939895;
                        } else {
                            var6 = -0.064068526;
                        }
                    } else {
                        if (input[4] < -0.39906302) {
                            var6 = 0.045210656;
                        } else {
                            var6 = 0.118412875;
                        }
                    }
                } else {
                    if (input[0] < 0.036925055) {
                        if (input[7] < 1.4277248) {
                            var6 = 0.22137731;
                        } else {
                            var6 = -0.4488193;
                        }
                    } else {
                        var6 = 0.51810086;
                    }
                }
            } else {
                if (input[3] < 1.7779255) {
                    if (input[4] < 0.25714093) {
                        if (input[1] < 0.07890751) {
                            var6 = 0.3675819;
                        } else {
                            var6 = -0.008687253;
                        }
                    } else {
                        if (input[1] < 0.17003983) {
                            var6 = -0.24988654;
                        } else {
                            var6 = 0.71669567;
                        }
                    }
                } else {
                    if (input[4] < 1.3814222) {
                        if (input[7] < 2.4836273) {
                            var6 = -0.3178218;
                        } else {
                            var6 = 0.05857624;
                        }
                    } else {
                        if (input[7] < 1.7161589) {
                            var6 = 0.059850484;
                        } else {
                            var6 = 0.29318768;
                        }
                    }
                }
            }
        }
    }
    var var7;
    if (input[7] < 0.81429857) {
        if (input[7] < -0.19951066) {
            if (input[7] < -0.7384535) {
                if (input[2] < -0.25191775) {
                    if (input[7] < -0.82008153) {
                        if (input[6] < 2.0145857) {
                            var7 = -0.037257887;
                        } else {
                            var7 = 0.039391655;
                        }
                    } else {
                        if (input[6] < -1.8854678) {
                            var7 = 0.053730395;
                        } else {
                            var7 = -0.07882221;
                        }
                    }
                } else {
                    if (input[7] < -0.82008153) {
                        if (input[2] < -0.20849527) {
                            var7 = -0.03463492;
                        } else {
                            var7 = -0.025591422;
                        }
                    } else {
                        if (input[4] < -0.21138422) {
                            var7 = -0.03591502;
                        } else {
                            var7 = -0.0081452;
                        }
                    }
                }
            } else {
                if (input[1] < 6.3983216) {
                    if (input[1] < 2.9135306) {
                        if (input[3] < 4.464234) {
                            var7 = -0.01538826;
                        } else {
                            var7 = 0.24447049;
                        }
                    } else {
                        if (input[0] < -0.29855236) {
                            var7 = 0.10479151;
                        } else {
                            var7 = -0.07019084;
                        }
                    }
                } else {
                    if (input[7] < -0.2809543) {
                        if (input[6] < -0.73580486) {
                            var7 = 0.21326186;
                        } else {
                            var7 = -0.023296723;
                        }
                    } else {
                        var7 = 0.41477793;
                    }
                }
            }
        } else {
            if (input[1] < 1.9341983) {
                if (input[1] < 1.7886586) {
                    if (input[1] < -0.11695896) {
                        if (input[1] < -0.17952742) {
                            var7 = 0.004594942;
                        } else {
                            var7 = -0.098812945;
                        }
                    } else {
                        if (input[1] < 0.059864935) {
                            var7 = 0.08721714;
                        } else {
                            var7 = 0.013728348;
                        }
                    }
                } else {
                    if (input[0] < 1.0511591) {
                        if (input[6] < -0.5125253) {
                            var7 = 0.37600356;
                        } else {
                            var7 = -0.08465947;
                        }
                    } else {
                        var7 = 1.1108968;
                    }
                }
            } else {
                if (input[7] < 0.40215626) {
                    if (input[3] < 8.027704) {
                        if (input[7] < 0.122625954) {
                            var7 = -0.092289306;
                        } else {
                            var7 = -0.28880435;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var7 = 0.61283344;
                        } else {
                            var7 = -0.021820184;
                        }
                    }
                } else {
                    if (input[3] < 0.24289207) {
                        var7 = 0.8245331;
                    } else {
                        if (input[7] < 0.47277445) {
                            var7 = 0.75127465;
                        } else {
                            var7 = -0.11555003;
                        }
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.07507915) {
            if (input[7] < 2.3104768) {
                if (input[6] < -0.04038927) {
                    if (input[1] < -0.42844105) {
                        var7 = 0.6471178;
                    } else {
                        if (input[4] < -0.22101451) {
                            var7 = -0.037571788;
                        } else {
                            var7 = 0.20487747;
                        }
                    }
                } else {
                    if (input[1] < -0.3577115) {
                        if (input[3] < -0.34371) {
                            var7 = 0.032234732;
                        } else {
                            var7 = -0.33993745;
                        }
                    } else {
                        if (input[4] < -0.21138422) {
                            var7 = 0.16054422;
                        } else {
                            var7 = -0.061629724;
                        }
                    }
                }
            } else {
                if (input[4] < -0.2758848) {
                    if (input[3] < -0.2559938) {
                        if (input[2] < -0.23563433) {
                            var7 = 0.11897389;
                        } else {
                            var7 = -0.06727099;
                        }
                    } else {
                        if (input[7] < 2.5736654) {
                            var7 = 0.12276429;
                        } else {
                            var7 = 1.260892;
                        }
                    }
                } else {
                    if (input[0] < -0.29855236) {
                        if (input[1] < -0.34683004) {
                            var7 = 0.40944916;
                        } else {
                            var7 = -0.5037854;
                        }
                    } else {
                        if (input[4] < -0.27409312) {
                            var7 = -0.46446005;
                        } else {
                            var7 = 0.28777504;
                        }
                    }
                }
            }
        } else {
            if (input[3] < 1.3393445) {
                if (input[6] < -0.04427114) {
                    if (input[6] < -0.552997) {
                        if (input[2] < -0.18135624) {
                            var7 = 0.005688719;
                        } else {
                            var7 = 0.52872545;
                        }
                    } else {
                        if (input[1] < 0.028580708) {
                            var7 = 0.17925823;
                        } else {
                            var7 = 0.9258763;
                        }
                    }
                } else {
                    if (input[1] < 0.0462631) {
                        if (input[4] < -0.11490756) {
                            var7 = 0.5160829;
                        } else {
                            var7 = 0.011174537;
                        }
                    } else {
                        if (input[1] < 0.11495238) {
                            var7 = -0.45609993;
                        } else {
                            var7 = 0.068691894;
                        }
                    }
                }
            } else {
                if (input[7] < 2.2242022) {
                    if (input[7] < 2.0969927) {
                        if (input[6] < 0.36121142) {
                            var7 = -0.20633826;
                        } else {
                            var7 = 0.13459603;
                        }
                    } else {
                        var7 = -0.7472843;
                    }
                } else {
                    if (input[7] < 3.0238564) {
                        if (input[0] < -0.34926406) {
                            var7 = -0.30132145;
                        } else {
                            var7 = 0.36903575;
                        }
                    } else {
                        var7 = -0.3043477;
                    }
                }
            }
        }
    }
    var var8;
    if (input[7] < 0.122625954) {
        if (input[2] < -0.25191775) {
            if (input[4] < -0.40226245) {
                if (input[1] < -0.42708087) {
                    if (input[1] < -0.42776096) {
                        if (input[7] < -0.19674025) {
                            var8 = -0.116287805;
                        } else {
                            var8 = -0.023041917;
                        }
                    } else {
                        if (input[7] < -0.19674025) {
                            var8 = 0.13403913;
                        } else {
                            var8 = -0.1520264;
                        }
                    }
                } else {
                    if (input[7] < -0.7277347) {
                        if (input[1] < -0.4257207) {
                            var8 = -0.06267149;
                        } else {
                            var8 = -0.0165349;
                        }
                    } else {
                        if (input[1] < -0.4175596) {
                            var8 = 0.23857133;
                        } else {
                            var8 = -0.055320207;
                        }
                    }
                }
            } else {
                if (input[0] < -0.31805685) {
                    if (input[4] < -0.280364) {
                        if (input[1] < -0.01630536) {
                            var8 = -0.01597161;
                        } else {
                            var8 = 0.20335415;
                        }
                    } else {
                        if (input[1] < -0.3495504) {
                            var8 = 0.26146147;
                        } else {
                            var8 = -0.062325504;
                        }
                    }
                } else {
                    if (input[7] < -0.14663717) {
                        if (input[1] < -0.070712715) {
                            var8 = -0.02090019;
                        } else {
                            var8 = -0.0525313;
                        }
                    } else {
                        if (input[6] < -1.2113086) {
                            var8 = 0.16717775;
                        } else {
                            var8 = -0.11495835;
                        }
                    }
                }
            }
        } else {
            if (input[7] < -0.5956787) {
                if (input[6] < -0.6631695) {
                    if (input[7] < -0.82008153) {
                        if (input[2] < 0.16602354) {
                            var8 = -0.022549361;
                        } else {
                            var8 = -0.004277526;
                        }
                    } else {
                        if (input[4] < -0.06984124) {
                            var8 = -0.015554614;
                        } else {
                            var8 = 0.02931752;
                        }
                    }
                } else {
                    if (input[6] < -0.65544695) {
                        if (input[3] < -0.009292) {
                            var8 = -0.036010116;
                        } else {
                            var8 = -0.09113374;
                        }
                    } else {
                        if (input[1] < 2.524518) {
                            var8 = -0.017818635;
                        } else {
                            var8 = -0.04788867;
                        }
                    }
                }
            } else {
                if (input[1] < -0.21353202) {
                    if (input[0] < -0.17372355) {
                        if (input[1] < -0.40259758) {
                            var8 = -0.026575219;
                        } else {
                            var8 = 0.006506128;
                        }
                    } else {
                        if (input[6] < -0.86047095) {
                            var8 = -0.13007694;
                        } else {
                            var8 = -0.027117364;
                        }
                    }
                } else {
                    if (input[0] < 0.036925055) {
                        if (input[2] < -0.18135624) {
                            var8 = 0.004505235;
                        } else {
                            var8 = 0.10826959;
                        }
                    } else {
                        if (input[1] < 0.028580708) {
                            var8 = -0.07261871;
                        } else {
                            var8 = 0.0066171945;
                        }
                    }
                }
            }
        }
    } else {
        if (input[5] < 0.89645296) {
            if (input[4] < -0.37442738) {
                if (input[6] < 0.89587814) {
                    if (input[6] < -0.594532) {
                        if (input[7] < 1.8906171) {
                            var8 = 0.05877181;
                        } else {
                            var8 = -0.6813699;
                        }
                    } else {
                        if (input[7] < 3.0238564) {
                            var8 = -0.09753131;
                        } else {
                            var8 = 0.3215972;
                        }
                    }
                } else {
                    if (input[6] < 0.93331045) {
                        if (input[0] < -0.34536317) {
                            var8 = 0.002401495;
                        } else {
                            var8 = 0.85614383;
                        }
                    } else {
                        if (input[7] < 0.6268939) {
                            var8 = 0.347799;
                        } else {
                            var8 = -0.40540698;
                        }
                    }
                }
            } else {
                if (input[1] < 0.3237406) {
                    if (input[6] < -1.3329476) {
                        if (input[4] < -0.23893134) {
                            var8 = 0.072055556;
                        } else {
                            var8 = 0.7050768;
                        }
                    } else {
                        if (input[2] < -0.13793376) {
                            var8 = 0.02265192;
                        } else {
                            var8 = 0.14215086;
                        }
                    }
                } else {
                    if (input[0] < -0.31805685) {
                        if (input[3] < 0.24289207) {
                            var8 = 0.8801889;
                        } else {
                            var8 = -0.00942456;
                        }
                    } else {
                        if (input[4] < 0.3545637) {
                            var8 = -0.28861275;
                        } else {
                            var8 = 0.0076985667;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 3.248952) {
                if (input[7] < 0.1638199) {
                    if (input[1] < -0.4175596) {
                        var8 = -0.13366954;
                    } else {
                        if (input[1] < -0.41143876) {
                            var8 = 1.42788;
                        } else {
                            var8 = 0.24112038;
                        }
                    }
                } else {
                    if (input[6] < -0.6382811) {
                        if (input[1] < -0.34274948) {
                            var8 = 0.058130953;
                        } else {
                            var8 = -0.13233934;
                        }
                    } else {
                        if (input[6] < -0.19405304) {
                            var8 = 0.13123032;
                        } else {
                            var8 = 0.032828014;
                        }
                    }
                }
            } else {
                if (input[4] < -0.40226245) {
                    if (input[0] < -0.34926406) {
                        if (input[6] < 0.46406695) {
                            var8 = 0.33226705;
                        } else {
                            var8 = -0.09020554;
                        }
                    } else {
                        var8 = -0.48877335;
                    }
                } else {
                    if (input[4] < -0.39309075) {
                        if (input[1] < -0.41891977) {
                            var8 = 0.14986235;
                        } else {
                            var8 = 1.0201857;
                        }
                    } else {
                        if (input[3] < -0.07507915) {
                            var8 = 0.09271502;
                        } else {
                            var8 = 0.489424;
                        }
                    }
                }
            }
        }
    }
    var var9;
    if (input[7] < 0.81429857) {
        if (input[1] < -0.42368042) {
            if (input[7] < 0.71287626) {
                if (input[6] < 0.87345564) {
                    if (input[7] < 0.19140512) {
                        if (input[1] < -0.4257207) {
                            var9 = -0.027539354;
                        } else {
                            var9 = 0.018796034;
                        }
                    } else {
                        if (input[6] < 0.18156274) {
                            var9 = 0.15992115;
                        } else {
                            var9 = 0.010652027;
                        }
                    }
                } else {
                    if (input[6] < 2.1701546) {
                        var9 = -0.3141201;
                    } else {
                        var9 = -0.013992507;
                    }
                }
            } else {
                if (input[5] < 0.89645296) {
                    var9 = -0.28715304;
                } else {
                    if (input[6] < -0.013384028) {
                        if (input[1] < -0.4257207) {
                            var9 = 0.36461604;
                        } else {
                            var9 = 1.1649164;
                        }
                    } else {
                        if (input[6] < 0.3804174) {
                            var9 = -0.30150023;
                        } else {
                            var9 = -0.037876822;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.42027995) {
                if (input[7] < 0.5394694) {
                    if (input[6] < -0.44490635) {
                        if (input[2] < -0.24648994) {
                            var9 = -0.015438746;
                        } else {
                            var9 = 0.22690044;
                        }
                    } else {
                        if (input[6] < 0.10158316) {
                            var9 = -0.056694135;
                        } else {
                            var9 = -0.14371887;
                        }
                    }
                } else {
                    if (input[0] < -0.34926406) {
                        var9 = 0.1975949;
                    } else {
                        if (input[0] < -0.34536317) {
                            var9 = -0.39141595;
                        } else {
                            var9 = -0.20721498;
                        }
                    }
                }
            } else {
                if (input[4] < -0.39906302) {
                    if (input[7] < 0.39379358) {
                        if (input[3] < -0.4588375) {
                            var9 = 0.36433777;
                        } else {
                            var9 = -0.023900837;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var9 = 0.09295131;
                        } else {
                            var9 = 0.5911604;
                        }
                    }
                } else {
                    if (input[4] < -0.387865) {
                        if (input[7] < 0.6228381) {
                            var9 = -0.03531848;
                        } else {
                            var9 = -0.24620065;
                        }
                    } else {
                        if (input[7] < -0.19674025) {
                            var9 = -0.010682288;
                        } else {
                            var9 = 0.004743062;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.39906302) {
            if (input[1] < -0.42232025) {
                if (input[6] < 0.93331045) {
                    if (input[6] < 0.3804174) {
                        if (input[3] < -0.4588375) {
                            var9 = 0.09963193;
                        } else {
                            var9 = -0.4816649;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var9 = 0.07460949;
                        } else {
                            var9 = -0.06717873;
                        }
                    }
                } else {
                    if (input[6] < 0.9883007) {
                        if (input[1] < -0.42776096) {
                            var9 = 0.47728914;
                        } else {
                            var9 = 1.1092162;
                        }
                    } else {
                        if (input[6] < 1.1517857) {
                            var9 = -0.43292633;
                        } else {
                            var9 = 0.16611971;
                        }
                    }
                }
            } else {
                if (input[6] < 0.8608831) {
                    if (input[6] < -0.33531734) {
                        if (input[0] < -0.34536317) {
                            var9 = 0.50688183;
                        } else {
                            var9 = -0.02749722;
                        }
                    } else {
                        if (input[6] < 0.7829106) {
                            var9 = -0.28622007;
                        } else {
                            var9 = -0.031399738;
                        }
                    }
                } else {
                    if (input[0] < -0.34926406) {
                        var9 = 0.80236626;
                    } else {
                        if (input[0] < -0.34536317) {
                            var9 = -0.30216783;
                        } else {
                            var9 = 0.10053535;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.39883906) {
                if (input[6] < 0.03295901) {
                    if (input[6] < -0.27827838) {
                        if (input[0] < -0.34536317) {
                            var9 = 0.08135691;
                        } else {
                            var9 = -0.2568935;
                        }
                    } else {
                        var9 = -0.36336517;
                    }
                } else {
                    if (input[6] < 0.070459716) {
                        var9 = 1.1718826;
                    } else {
                        if (input[6] < 0.22764193) {
                            var9 = -0.31156343;
                        } else {
                            var9 = 0.42572796;
                        }
                    }
                }
            } else {
                if (input[7] < 2.8045325) {
                    if (input[6] < 0.832688) {
                        if (input[6] < 0.7276644) {
                            var9 = 0.025199717;
                        } else {
                            var9 = 0.1478996;
                        }
                    } else {
                        if (input[4] < -0.27409312) {
                            var9 = -0.10664002;
                        } else {
                            var9 = 0.099227905;
                        }
                    }
                } else {
                    if (input[4] < -0.39309075) {
                        if (input[6] < 0.03295901) {
                            var9 = 0.89513946;
                        } else {
                            var9 = 0.19278577;
                        }
                    } else {
                        if (input[3] < -0.34371) {
                            var9 = 0.011056031;
                        } else {
                            var9 = 0.20463526;
                        }
                    }
                }
            }
        }
    }
    var var10;
    if (input[7] < 0.5394694) {
        if (input[1] < -0.0027035202) {
            if (input[1] < -0.070712715) {
                if (input[0] < -0.29855236) {
                    if (input[4] < -0.06984124) {
                        if (input[1] < -0.07615345) {
                            var10 = 0.0007107986;
                        } else {
                            var10 = 0.454036;
                        }
                    } else {
                        if (input[7] < -0.4276074) {
                            var10 = -0.050359376;
                        } else {
                            var10 = 0.5228676;
                        }
                    }
                } else {
                    if (input[4] < -0.30658054) {
                        if (input[6] < -0.8956929) {
                            var10 = -0.004412992;
                        } else {
                            var10 = -0.042978242;
                        }
                    } else {
                        if (input[0] < -0.21273255) {
                            var10 = 0.043759476;
                        } else {
                            var10 = -0.010011973;
                        }
                    }
                }
            } else {
                if (input[7] < 0.122625954) {
                    if (input[7] < -0.025550095) {
                        if (input[6] < -0.83312756) {
                            var10 = 0.025266582;
                        } else {
                            var10 = -0.07585759;
                        }
                    } else {
                        if (input[7] < 0.022583526) {
                            var10 = 0.6302958;
                        } else {
                            var10 = -0.022970445;
                        }
                    }
                } else {
                    if (input[3] < 0.16065814) {
                        if (input[4] < -0.23407887) {
                            var10 = -0.36394405;
                        } else {
                            var10 = -0.009171463;
                        }
                    } else {
                        var10 = -0.3435442;
                    }
                }
            }
        } else {
            if (input[7] < 0.17264716) {
                if (input[0] < -0.34926406) {
                    if (input[4] < -0.30499965) {
                        var10 = 0.82921106;
                    } else {
                        if (input[1] < 0.25029066) {
                            var10 = 0.21174599;
                        } else {
                            var10 = -0.052429277;
                        }
                    }
                } else {
                    if (input[2] < -0.20849527) {
                        if (input[7] < 0.12012489) {
                            var10 = -0.018662114;
                        } else {
                            var10 = -0.30208474;
                        }
                    } else {
                        if (input[0] < 0.42701507) {
                            var10 = 0.05669718;
                        } else {
                            var10 = -0.015262404;
                        }
                    }
                }
            } else {
                if (input[1] < 0.059864935) {
                    if (input[7] < 0.35272354) {
                        if (input[3] < 0.0784242) {
                            var10 = 0.36675534;
                        } else {
                            var10 = 1.3617588;
                        }
                    } else {
                        if (input[6] < -1.0476673) {
                            var10 = -0.423809;
                        } else {
                            var10 = 0.00869178;
                        }
                    }
                } else {
                    if (input[0] < -0.26734516) {
                        if (input[1] < 0.15779817) {
                            var10 = -0.33065397;
                        } else {
                            var10 = 0.023342822;
                        }
                    } else {
                        if (input[1] < 0.1387556) {
                            var10 = 0.50552094;
                        } else {
                            var10 = 0.0742299;
                        }
                    }
                }
            }
        }
    } else {
        if (input[2] < -0.25191775) {
            if (input[1] < -0.029907197) {
                if (input[1] < -0.057110872) {
                    if (input[6] < 0.57522696) {
                        if (input[0] < -0.12691276) {
                            var10 = -0.072279565;
                        } else {
                            var10 = 0.5358922;
                        }
                    } else {
                        if (input[4] < -0.193766) {
                            var10 = 0.056115184;
                        } else {
                            var10 = -0.68804944;
                        }
                    }
                } else {
                    var10 = 1.1503747;
                }
            } else {
                if (input[4] < -0.17062342) {
                    if (input[6] < -0.87364) {
                        var10 = 0.21399306;
                    } else {
                        if (input[6] < 0.9187714) {
                            var10 = -0.55481637;
                        } else {
                            var10 = 0.21079196;
                        }
                    }
                } else {
                    if (input[4] < -0.1549462) {
                        var10 = 0.907535;
                    } else {
                        if (input[1] < 2.524518) {
                            var10 = -0.30221897;
                        } else {
                            var10 = -0.08426792;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.1053974) {
                if (input[4] < -0.03400758) {
                    if (input[6] < -1.3329476) {
                        if (input[7] < 1.7161589) {
                            var10 = -0.14864369;
                        } else {
                            var10 = -0.58664036;
                        }
                    } else {
                        if (input[6] < -1.2113086) {
                            var10 = 0.740189;
                        } else {
                            var10 = 0.02422505;
                        }
                    }
                } else {
                    if (input[6] < 0.44575542) {
                        if (input[7] < 0.55423754) {
                            var10 = -0.16043915;
                        } else {
                            var10 = -0.5386408;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var10 = 0.30620992;
                        } else {
                            var10 = -0.14686802;
                        }
                    }
                }
            } else {
                if (input[6] < -0.036795624) {
                    if (input[0] < -0.12691276) {
                        if (input[1] < 0.28293508) {
                            var10 = 0.38624728;
                        } else {
                            var10 = 0.04633993;
                        }
                    } else {
                        if (input[1] < 0.22036663) {
                            var10 = -0.26542628;
                        } else {
                            var10 = 0.22396637;
                        }
                    }
                } else {
                    if (input[4] < -0.24453035) {
                        if (input[4] < -0.30499965) {
                            var10 = -0.09708587;
                        } else {
                            var10 = -0.4558691;
                        }
                    } else {
                        if (input[1] < 0.0462631) {
                            var10 = 0.21083188;
                        } else {
                            var10 = -0.01818147;
                        }
                    }
                }
            }
        }
    }
    var var11;
    if (input[7] < 1.2230927) {
        if (input[2] < -0.25191775) {
            if (input[7] < 1.061024) {
                if (input[7] < 0.9396391) {
                    if (input[7] < 0.5394694) {
                        if (input[7] < 0.3372331) {
                            var11 = -0.017706152;
                        } else {
                            var11 = 0.091605864;
                        }
                    } else {
                        if (input[6] < -0.552997) {
                            var11 = 0.03208152;
                        } else {
                            var11 = -0.11138124;
                        }
                    }
                } else {
                    if (input[1] < -0.3753939) {
                        if (input[0] < -0.33756137) {
                            var11 = 0.010860911;
                        } else {
                            var11 = 0.5726195;
                        }
                    } else {
                        if (input[1] < -0.27542037) {
                            var11 = 1.0315036;
                        } else {
                            var11 = -0.08664124;
                        }
                    }
                }
            } else {
                if (input[1] < -0.4257207) {
                    var11 = -0.012257553;
                } else {
                    if (input[1] < -0.057110872) {
                        var11 = -0.3700356;
                    } else {
                        var11 = -0.19894059;
                    }
                }
            }
        } else {
            if (input[0] < -0.21273255) {
                if (input[4] < -0.3774135) {
                    if (input[0] < -0.29855236) {
                        if (input[4] < -0.3800264) {
                            var11 = -0.007104403;
                        } else {
                            var11 = -0.14042616;
                        }
                    } else {
                        if (input[7] < -0.0074292026) {
                            var11 = -0.051518213;
                        } else {
                            var11 = -0.25932935;
                        }
                    }
                } else {
                    if (input[1] < 0.059864935) {
                        if (input[1] < 0.00817795) {
                            var11 = 0.015616731;
                        } else {
                            var11 = 0.28980732;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var11 = 0.02380221;
                        } else {
                            var11 = -0.066983335;
                        }
                    }
                }
            } else {
                if (input[1] < -0.24277596) {
                    if (input[7] < 0.19140512) {
                        if (input[4] < -0.3206769) {
                            var11 = -0.055401325;
                        } else {
                            var11 = -0.0063259075;
                        }
                    } else {
                        if (input[4] < -0.35927713) {
                            var11 = 0.3447113;
                        } else {
                            var11 = -0.08915837;
                        }
                    }
                } else {
                    if (input[0] < 0.10714126) {
                        if (input[7] < 0.09761535) {
                            var11 = 0.010949008;
                        } else {
                            var11 = 0.10450784;
                        }
                    } else {
                        if (input[7] < 0.5512693) {
                            var11 = -0.008342868;
                        } else {
                            var11 = -0.1511398;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.3195571) {
            if (input[0] < -0.26734516) {
                if (input[1] < -0.22577366) {
                    if (input[1] < -0.38967583) {
                        if (input[4] < -0.39010462) {
                            var11 = 0.003000356;
                        } else {
                            var11 = 0.08680035;
                        }
                    } else {
                        if (input[4] < -0.3777868) {
                            var11 = -0.33436334;
                        } else {
                            var11 = -0.04535329;
                        }
                    }
                } else {
                    if (input[6] < -1.8854678) {
                        var11 = 0.011288202;
                    } else {
                        if (input[1] < -0.10199694) {
                            var11 = 0.8613981;
                        } else {
                            var11 = 0.3339232;
                        }
                    }
                }
            } else {
                if (input[1] < -0.2740602) {
                    if (input[1] < -0.376074) {
                        var11 = -0.5660387;
                    } else {
                        if (input[3] < -0.37112132) {
                            var11 = -0.077835135;
                        } else {
                            var11 = -0.46827513;
                        }
                    }
                } else {
                    if (input[0] < -0.21273255) {
                        var11 = -0.07805708;
                    } else {
                        var11 = 0.08208597;
                    }
                }
            }
        } else {
            if (input[1] < -0.30466434) {
                if (input[6] < 0.832688) {
                    if (input[1] < -0.32098654) {
                        if (input[2] < -0.23563433) {
                            var11 = 0.341165;
                        } else {
                            var11 = 0.0325224;
                        }
                    } else {
                        if (input[6] < -0.11035498) {
                            var11 = 0.21199013;
                        } else {
                            var11 = 0.5798561;
                        }
                    }
                } else {
                    if (input[4] < -0.27812442) {
                        if (input[6] < 0.9070014) {
                            var11 = -0.7957681;
                        } else {
                            var11 = -0.05781186;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var11 = 0.8413432;
                        } else {
                            var11 = -0.0053841514;
                        }
                    }
                }
            } else {
                if (input[1] < -0.28834212) {
                    if (input[3] < -0.2559938) {
                        if (input[6] < 0.10158316) {
                            var11 = -0.35330656;
                        } else {
                            var11 = 0.78601426;
                        }
                    } else {
                        if (input[6] < 0.60563) {
                            var11 = -0.45171607;
                        } else {
                            var11 = -0.80085593;
                        }
                    }
                } else {
                    if (input[4] < -0.280364) {
                        if (input[4] < -0.30947888) {
                            var11 = -0.104211874;
                        } else {
                            var11 = 0.39273217;
                        }
                    } else {
                        if (input[4] < -0.2714056) {
                            var11 = -0.5179669;
                        } else {
                            var11 = 0.027657706;
                        }
                    }
                }
            }
        }
    }
    var var12;
    if (input[7] < 0.5394694) {
        if (input[1] < 6.3983216) {
            if (input[1] < 3.7881289) {
                if (input[1] < 2.524518) {
                    if (input[1] < 1.9341983) {
                        if (input[7] < 0.534977) {
                            var12 = -0.0025624246;
                        } else {
                            var12 = -0.036614116;
                        }
                    } else {
                        if (input[7] < -0.12748012) {
                            var12 = 0.0063673356;
                        } else {
                            var12 = -0.19711496;
                        }
                    }
                } else {
                    if (input[7] < 0.3227108) {
                        if (input[1] < 2.9135306) {
                            var12 = 0.08245218;
                        } else {
                            var12 = -0.002867256;
                        }
                    } else {
                        if (input[1] < 2.9135306) {
                            var12 = 0.012601447;
                        } else {
                            var12 = 0.51672196;
                        }
                    }
                }
            } else {
                if (input[7] < 0.5327999) {
                    if (input[0] < -0.34536317) {
                        if (input[6] < -0.52452344) {
                            var12 = -0.08672649;
                        } else {
                            var12 = 0.52181894;
                        }
                    } else {
                        if (input[7] < -0.2561061) {
                            var12 = -0.019631714;
                        } else {
                            var12 = -0.13286045;
                        }
                    }
                } else {
                    var12 = 0.44052517;
                }
            }
        } else {
            if (input[0] < 2.8455732) {
                if (input[7] < -0.9128352) {
                    if (input[3] < 4.464234) {
                        if (input[0] < 0.54404205) {
                            var12 = 0.00039689543;
                        } else {
                            var12 = -0.011320115;
                        }
                    } else {
                        if (input[0] < 0.6610691) {
                            var12 = -0.00614478;
                        } else {
                            var12 = 0.043209817;
                        }
                    }
                } else {
                    if (input[0] < -0.31805685) {
                        var12 = -0.13313438;
                    } else {
                        if (input[7] < 0.12012489) {
                            var12 = 0.17933851;
                        } else {
                            var12 = -0.094033964;
                        }
                    }
                }
            } else {
                if (input[6] < -1.2959688) {
                    if (input[7] < -0.98284286) {
                        if (input[2] < -0.20849527) {
                            var12 = -0.0015374959;
                        } else {
                            var12 = -0.0102413;
                        }
                    } else {
                        var12 = 0.15765202;
                    }
                } else {
                    if (input[2] < 0.99105054) {
                        if (input[6] < -0.40693426) {
                            var12 = 0.05550054;
                        } else {
                            var12 = -0.05394413;
                        }
                    } else {
                        if (input[7] < -0.98284286) {
                            var12 = 0.0005291939;
                        } else {
                            var12 = -0.0942469;
                        }
                    }
                }
            }
        }
    } else {
        if (input[3] < 1.7779255) {
            if (input[4] < 0.29745382) {
                if (input[1] < 0.25029066) {
                    if (input[1] < 0.23532864) {
                        if (input[3] < 0.7362957) {
                            var12 = 0.010793876;
                        } else {
                            var12 = 0.83577913;
                        }
                    } else {
                        if (input[6] < -0.5637625) {
                            var12 = 1.0737715;
                        } else {
                            var12 = -0.08248716;
                        }
                    }
                } else {
                    if (input[1] < 1.9341983) {
                        if (input[4] < 0.037659746) {
                            var12 = -0.24469386;
                        } else {
                            var12 = -0.043693252;
                        }
                    } else {
                        if (input[0] < -0.26734516) {
                            var12 = 0.293772;
                        } else {
                            var12 = -0.25296384;
                        }
                    }
                }
            } else {
                if (input[4] < 0.3699975) {
                    if (input[6] < 0.10888186) {
                        if (input[6] < -0.57948685) {
                            var12 = 0.08278971;
                        } else {
                            var12 = 0.91256267;
                        }
                    } else {
                        if (input[4] < 0.34224588) {
                            var12 = -0.21037911;
                        } else {
                            var12 = 0.25082788;
                        }
                    }
                } else {
                    if (input[6] < 0.60563) {
                        if (input[6] < 0.20030792) {
                            var12 = -0.15682006;
                        } else {
                            var12 = 0.522856;
                        }
                    } else {
                        if (input[1] < 1.3357173) {
                            var12 = -0.37890747;
                        } else {
                            var12 = 0.08417413;
                        }
                    }
                }
            }
        } else {
            if (input[2] < -0.24648994) {
                if (input[7] < 0.99799716) {
                    if (input[7] < 0.54780626) {
                        var12 = -0.3092039;
                    } else {
                        if (input[1] < 0.78892344) {
                            var12 = -0.1363694;
                        } else {
                            var12 = 0.7672038;
                        }
                    }
                } else {
                    if (input[7] < 2.4836273) {
                        if (input[4] < 1.3814222) {
                            var12 = -0.18108572;
                        } else {
                            var12 = 0.009153003;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var12 = -0.18667865;
                        } else {
                            var12 = 0.3766292;
                        }
                    }
                }
            } else {
                if (input[4] < 2.5460162) {
                    if (input[0] < -0.12691276) {
                        if (input[2] < -0.13793376) {
                            var12 = -0.40197238;
                        } else {
                            var12 = -0.0033580542;
                        }
                    } else {
                        if (input[1] < 1.473776) {
                            var12 = 0.04859809;
                        } else {
                            var12 = -0.09103567;
                        }
                    }
                } else {
                    if (input[0] < -0.31805685) {
                        var12 = 0.37089443;
                    } else {
                        if (input[0] < -0.048894748) {
                            var12 = -0.147002;
                        } else {
                            var12 = 0.05456976;
                        }
                    }
                }
            }
        }
    }
    var var13;
    if (input[7] < 3.0238564) {
        if (input[1] < -0.42232025) {
            if (input[7] < 2.8045325) {
                if (input[7] < 2.5736654) {
                    if (input[7] < 0.99799716) {
                        if (input[6] < 0.87345564) {
                            var13 = 0.0041330974;
                        } else {
                            var13 = -0.14220986;
                        }
                    } else {
                        if (input[6] < -0.36445907) {
                            var13 = 0.50101656;
                        } else {
                            var13 = 0.029910155;
                        }
                    }
                } else {
                    if (input[3] < -0.4588375) {
                        if (input[6] < 2.0145857) {
                            var13 = -0.5293055;
                        } else {
                            var13 = 0.07175425;
                        }
                    } else {
                        if (input[6] < 0.097515695) {
                            var13 = 0.8764212;
                        } else {
                            var13 = 0.23617311;
                        }
                    }
                }
            } else {
                if (input[0] < -0.34536317) {
                    var13 = -0.4557827;
                } else {
                    var13 = -0.16812055;
                }
            }
        } else {
            if (input[4] < -0.39010462) {
                if (input[7] < 1.1330545) {
                    if (input[7] < 1.061024) {
                        if (input[1] < -0.42027995) {
                            var13 = -0.092353635;
                        } else {
                            var13 = 0.00052255386;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var13 = 1.2577767;
                        } else {
                            var13 = -0.2648606;
                        }
                    }
                } else {
                    if (input[6] < 0.87345564) {
                        if (input[7] < 2.5736654) {
                            var13 = -0.17588967;
                        } else {
                            var13 = 0.26557705;
                        }
                    } else {
                        if (input[6] < 0.93331045) {
                            var13 = 0.3325321;
                        } else {
                            var13 = -0.36351615;
                        }
                    }
                }
            } else {
                if (input[7] < 0.9396391) {
                    if (input[7] < 0.7395542) {
                        if (input[7] < 0.6728593) {
                            var13 = -0.0013348096;
                        } else {
                            var13 = 0.069132544;
                        }
                    } else {
                        if (input[7] < 0.7729017) {
                            var13 = -0.39214587;
                        } else {
                            var13 = -0.01899562;
                        }
                    }
                } else {
                    if (input[1] < -0.398517) {
                        if (input[1] < -0.40259758) {
                            var13 = 0.055290014;
                        } else {
                            var13 = 0.35835576;
                        }
                    } else {
                        if (input[4] < -0.3889848) {
                            var13 = 0.7164757;
                        } else {
                            var13 = -0.00550523;
                        }
                    }
                }
            }
        }
    } else {
        if (input[2] < -0.24648994) {
            if (input[1] < -0.41891977) {
                if (input[6] < 0.066193745) {
                    if (input[1] < -0.42844105) {
                        if (input[6] < -0.33531734) {
                            var13 = -0.2639005;
                        } else {
                            var13 = 0.27065086;
                        }
                    } else {
                        if (input[1] < -0.42027995) {
                            var13 = -0.6265396;
                        } else {
                            var13 = -0.1365203;
                        }
                    }
                } else {
                    if (input[6] < 0.46406695) {
                        if (input[1] < -0.4243605) {
                            var13 = 0.609151;
                        } else {
                            var13 = -0.07900484;
                        }
                    } else {
                        if (input[6] < 1.1517857) {
                            var13 = -0.28520823;
                        } else {
                            var13 = 0.13728403;
                        }
                    }
                }
            } else {
                if (input[1] < 0.104751006) {
                    if (input[0] < -0.33756137) {
                        if (input[2] < -0.25191775) {
                            var13 = 0.19001612;
                        } else {
                            var13 = 0.49812087;
                        }
                    } else {
                        var13 = -0.33378884;
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        if (input[4] < 0.25714093) {
                            var13 = -0.3417783;
                        } else {
                            var13 = -0.061202955;
                        }
                    } else {
                        var13 = 0.39085338;
                    }
                }
            }
        } else {
            if (input[1] < -0.4100786) {
                if (input[6] < 0.9883007) {
                    if (input[6] < 0.03295901) {
                        if (input[1] < -0.4175596) {
                            var13 = -0.0837832;
                        } else {
                            var13 = 1.180532;
                        }
                    } else {
                        if (input[1] < -0.4257207) {
                            var13 = 0.6309333;
                        } else {
                            var13 = -0.22192891;
                        }
                    }
                } else {
                    if (input[6] < 1.7796307) {
                        var13 = 0.041343693;
                    } else {
                        var13 = -0.64399225;
                    }
                }
            } else {
                if (input[3] < -0.34371) {
                    if (input[6] < 1.7796307) {
                        var13 = -0.6377955;
                    } else {
                        var13 = 0.18875149;
                    }
                } else {
                    if (input[5] < 0.89645296) {
                        var13 = -0.5316262;
                    } else {
                        if (input[4] < -0.21138422) {
                            var13 = 0.027820177;
                        } else {
                            var13 = 0.36247244;
                        }
                    }
                }
            }
        }
    }
    var var14;
    if (input[0] < -0.31805685) {
        if (input[4] < -0.23893134) {
            if (input[3] < 0.0784242) {
                if (input[3] < -0.009292) {
                    if (input[4] < -0.3777868) {
                        if (input[1] < -0.4080383) {
                            var14 = 0.00990052;
                        } else {
                            var14 = -0.04436074;
                        }
                    } else {
                        if (input[6] < 0.23643003) {
                            var14 = 0.007261831;
                        } else {
                            var14 = 0.104639485;
                        }
                    }
                } else {
                    if (input[6] < -0.061430633) {
                        if (input[4] < -0.24194619) {
                            var14 = -0.14340402;
                        } else {
                            var14 = 0.19662173;
                        }
                    } else {
                        var14 = -0.65894413;
                    }
                }
            } else {
                if (input[1] < 0.028580708) {
                    var14 = 1.2449597;
                } else {
                    var14 = 0.054091826;
                }
            }
        } else {
            if (input[4] < -0.22373404) {
                if (input[7] < 0.88544947) {
                    if (input[6] < -0.5125253) {
                        if (input[4] < -0.2284052) {
                            var14 = -0.2441641;
                        } else {
                            var14 = 0.068107225;
                        }
                    } else {
                        if (input[6] < -0.38885298) {
                            var14 = 1.0072438;
                        } else {
                            var14 = 0.019258574;
                        }
                    }
                } else {
                    if (input[6] < 0.807752) {
                        if (input[1] < -0.20401073) {
                            var14 = -0.25092718;
                        } else {
                            var14 = -0.68033534;
                        }
                    } else {
                        var14 = 0.304914;
                    }
                }
            } else {
                if (input[4] < -0.22101451) {
                    if (input[6] < -0.38885298) {
                        if (input[1] < -0.029907197) {
                            var14 = -0.16651312;
                        } else {
                            var14 = 0.17065032;
                        }
                    } else {
                        var14 = 1.083919;
                    }
                } else {
                    if (input[6] < -0.19405304) {
                        if (input[6] < -0.38885298) {
                            var14 = -0.034292683;
                        } else {
                            var14 = -0.2393258;
                        }
                    } else {
                        if (input[1] < 0.15779817) {
                            var14 = -0.0086536445;
                        } else {
                            var14 = 0.15743634;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.34683004) {
            if (input[7] < 0.59282535) {
                if (input[7] < 0.5512693) {
                    if (input[7] < 0.5327999) {
                        if (input[7] < 0.5080835) {
                            var14 = -0.011646417;
                        } else {
                            var14 = 0.22195528;
                        }
                    } else {
                        if (input[0] < -0.29855236) {
                            var14 = 0.034263495;
                        } else {
                            var14 = -0.1493428;
                        }
                    }
                } else {
                    if (input[4] < -0.37442738) {
                        if (input[1] < -0.4073582) {
                            var14 = 0.08626782;
                        } else {
                            var14 = -0.2832013;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var14 = 0.32440263;
                        } else {
                            var14 = 0.10547548;
                        }
                    }
                }
            } else {
                if (input[6] < 0.9187714) {
                    if (input[1] < -0.3495504) {
                        if (input[7] < 2.3104768) {
                            var14 = -0.031763323;
                        } else {
                            var14 = 0.7892499;
                        }
                    } else {
                        if (input[6] < 0.89587814) {
                            var14 = -0.41609308;
                        } else {
                            var14 = 0.5256531;
                        }
                    }
                } else {
                    if (input[7] < 0.8062492) {
                        if (input[0] < -0.26734516) {
                            var14 = -0.03106394;
                        } else {
                            var14 = 0.07234197;
                        }
                    } else {
                        if (input[2] < -0.13793376) {
                            var14 = -0.43114045;
                        } else {
                            var14 = -0.05530969;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.30194396) {
                if (input[7] < 1.9305356) {
                    if (input[7] < 1.4711571) {
                        if (input[1] < -0.30466434) {
                            var14 = 0.019602545;
                        } else {
                            var14 = 0.17725387;
                        }
                    } else {
                        if (input[1] < -0.31826618) {
                            var14 = 0.5381233;
                        } else {
                            var14 = 0.055283558;
                        }
                    }
                } else {
                    if (input[1] < -0.32914764) {
                        var14 = -0.6512481;
                    } else {
                        if (input[3] < -0.31081644) {
                            var14 = 0.04380107;
                        } else {
                            var14 = -0.19810969;
                        }
                    }
                }
            } else {
                if (input[4] < -0.29436153) {
                    if (input[7] < 1.8501443) {
                        if (input[7] < 1.7797804) {
                            var14 = -0.040239073;
                        } else {
                            var14 = 0.67723376;
                        }
                    } else {
                        if (input[1] < -0.2910625) {
                            var14 = -0.5195423;
                        } else {
                            var14 = 0.31864694;
                        }
                    }
                } else {
                    if (input[4] < -0.29021826) {
                        if (input[7] < 1.061024) {
                            var14 = 0.06405035;
                        } else {
                            var14 = 1.0982512;
                        }
                    } else {
                        if (input[0] < -0.12691276) {
                            var14 = 0.016520316;
                        } else {
                            var14 = -0.004250728;
                        }
                    }
                }
            }
        }
    }
    var var15;
    if (input[7] < 3.0238564) {
        if (input[2] < -0.25191775) {
            if (input[1] < -0.41075867) {
                if (input[7] < 2.8045325) {
                    if (input[6] < 1.4832127) {
                        if (input[1] < -0.41279894) {
                            var15 = 0.013217629;
                        } else {
                            var15 = 0.12449619;
                        }
                    } else {
                        if (input[6] < 1.7796307) {
                            var15 = 0.5638251;
                        } else {
                            var15 = 0.00878706;
                        }
                    }
                } else {
                    var15 = -0.33172125;
                }
            } else {
                if (input[7] < 1.061024) {
                    if (input[7] < 0.9725973) {
                        if (input[6] < 0.25636658) {
                            var15 = -0.01658883;
                        } else {
                            var15 = 0.06400517;
                        }
                    } else {
                        if (input[1] < -0.3753939) {
                            var15 = -0.04844084;
                        } else {
                            var15 = 0.51858866;
                        }
                    }
                } else {
                    if (input[7] < 1.8294723) {
                        if (input[7] < 1.3185877) {
                            var15 = -0.15327416;
                        } else {
                            var15 = -0.39291695;
                        }
                    } else {
                        if (input[1] < -0.3998772) {
                            var15 = -0.2944895;
                        } else {
                            var15 = 0.02074145;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.39010462) {
                if (input[1] < -0.4168795) {
                    if (input[6] < 0.18851979) {
                        if (input[7] < 0.19140512) {
                            var15 = -0.013677608;
                        } else {
                            var15 = 0.079461046;
                        }
                    } else {
                        if (input[4] < -0.40018284) {
                            var15 = -0.04662269;
                        } else {
                            var15 = 0.03861173;
                        }
                    }
                } else {
                    if (input[6] < -0.6382811) {
                        if (input[7] < 0.8062492) {
                            var15 = 0.009400167;
                        } else {
                            var15 = 0.8698038;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var15 = -0.1605882;
                        } else {
                            var15 = 0.3440058;
                        }
                    }
                }
            } else {
                if (input[0] < -0.33756137) {
                    if (input[1] < -0.3998772) {
                        if (input[6] < 0.78802186) {
                            var15 = 0.102693275;
                        } else {
                            var15 = 0.4610016;
                        }
                    } else {
                        if (input[6] < 0.23643003) {
                            var15 = -0.03122467;
                        } else {
                            var15 = 0.075829394;
                        }
                    }
                } else {
                    if (input[7] < 2.5736654) {
                        if (input[1] < -0.34683004) {
                            var15 = -0.0070529613;
                        } else {
                            var15 = 0.006278253;
                        }
                    } else {
                        if (input[1] < -0.10199694) {
                            var15 = -0.26208374;
                        } else {
                            var15 = -0.008260667;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.40578184) {
            if (input[1] < -0.42844105) {
                if (input[6] < 0.46406695) {
                    if (input[6] < -0.33531734) {
                        var15 = -0.22580053;
                    } else {
                        var15 = 0.2544808;
                    }
                } else {
                    var15 = -0.105639495;
                }
            } else {
                var15 = -0.49749133;
            }
        } else {
            if (input[1] < -0.4100786) {
                if (input[6] < 1.7796307) {
                    if (input[1] < -0.4168795) {
                        if (input[6] < 0.066193745) {
                            var15 = -0.24813604;
                        } else {
                            var15 = 0.20423691;
                        }
                    } else {
                        if (input[6] < 0.46406695) {
                            var15 = 0.7480455;
                        } else {
                            var15 = 0.05476347;
                        }
                    }
                } else {
                    var15 = -0.4827223;
                }
            } else {
                if (input[4] < -0.39458382) {
                    var15 = 0.8860298;
                } else {
                    if (input[3] < -0.2559938) {
                        if (input[1] < -0.34683004) {
                            var15 = -0.048750676;
                        } else {
                            var15 = -0.4456808;
                        }
                    } else {
                        if (input[4] < -0.2758848) {
                            var15 = 0.7256206;
                        } else {
                            var15 = 0.0054923957;
                        }
                    }
                }
            }
        }
    }
    var var16;
    if (input[0] < 0.036925055) {
        if (input[4] < 0.04010295) {
            if (input[4] < -0.022489617) {
                if (input[4] < -0.05938976) {
                    if (input[1] < 0.36182573) {
                        if (input[3] < 0.0784242) {
                            var16 = 0.00076548284;
                        } else {
                            var16 = 0.06970881;
                        }
                    } else {
                        if (input[1] < 1.473776) {
                            var16 = -0.15177044;
                        } else {
                            var16 = 0.04614624;
                        }
                    }
                } else {
                    if (input[7] < 0.5394694) {
                        if (input[1] < 0.25029066) {
                            var16 = 0.092347205;
                        } else {
                            var16 = -0.061707433;
                        }
                    } else {
                        if (input[0] < -0.29855236) {
                            var16 = 0.013401838;
                        } else {
                            var16 = 0.6410357;
                        }
                    }
                }
            } else {
                if (input[7] < 0.35272354) {
                    if (input[6] < -0.9914472) {
                        if (input[7] < -0.19951066) {
                            var16 = -0.025417479;
                        } else {
                            var16 = 0.39403808;
                        }
                    } else {
                        if (input[7] < -0.5094603) {
                            var16 = -0.040287815;
                        } else {
                            var16 = -0.16375947;
                        }
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        if (input[4] < 0.037659746) {
                            var16 = 0.20347428;
                        } else {
                            var16 = -0.21115734;
                        }
                    } else {
                        if (input[3] < 0.5170052) {
                            var16 = -0.4532133;
                        } else {
                            var16 = -0.037818074;
                        }
                    }
                }
            }
        } else {
            if (input[2] < -0.007666345) {
                if (input[4] < 0.11828549) {
                    if (input[4] < 0.10753539) {
                        if (input[6] < 0.16973469) {
                            var16 = 0.01589363;
                        } else {
                            var16 = 0.2658156;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var16 = 1.4394975;
                        } else {
                            var16 = -0.17572704;
                        }
                    }
                } else {
                    if (input[2] < -0.061944436) {
                        if (input[1] < 0.11495238) {
                            var16 = -0.14250638;
                        } else {
                            var16 = 0.014089544;
                        }
                    } else {
                        if (input[1] < 0.11495238) {
                            var16 = 0.04398999;
                        } else {
                            var16 = -0.13913329;
                        }
                    }
                }
            } else {
                if (input[4] < 0.5691924) {
                    if (input[4] < 0.45621684) {
                        if (input[1] < 0.36182573) {
                            var16 = 0.0974973;
                        } else {
                            var16 = 0.5621909;
                        }
                    } else {
                        var16 = -0.2626056;
                    }
                } else {
                    if (input[7] < -0.6151869) {
                        if (input[7] < -0.98284286) {
                            var16 = -0.017050534;
                        } else {
                            var16 = -0.13243186;
                        }
                    } else {
                        if (input[6] < 0.17545679) {
                            var16 = 0.54776824;
                        } else {
                            var16 = -0.30011648;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.3545637) {
            if (input[7] < 0.35272354) {
                if (input[2] < -0.18135624) {
                    if (input[6] < 0.5872202) {
                        if (input[1] < -0.2910625) {
                            var16 = 0.2875084;
                        } else {
                            var16 = -0.010396034;
                        }
                    } else {
                        if (input[7] < -0.8641562) {
                            var16 = -0.0044614444;
                        } else {
                            var16 = 0.29533568;
                        }
                    }
                } else {
                    if (input[4] < -0.06088283) {
                        if (input[7] < -0.3922983) {
                            var16 = -0.02397004;
                        } else {
                            var16 = -0.1706101;
                        }
                    } else {
                        if (input[7] < 0.02577637) {
                            var16 = -0.022047868;
                        } else {
                            var16 = 0.13499682;
                        }
                    }
                }
            } else {
                if (input[1] < 0.4842423) {
                    if (input[4] < -0.05013273) {
                        if (input[2] < -0.18135624) {
                            var16 = -0.16208601;
                        } else {
                            var16 = 0.3106113;
                        }
                    } else {
                        if (input[6] < 0.7535138) {
                            var16 = -0.23646101;
                        } else {
                            var16 = 0.042216685;
                        }
                    }
                } else {
                    if (input[0] < 0.10714126) {
                        var16 = 0.6806247;
                    } else {
                        var16 = -0.076088674;
                    }
                }
            }
        } else {
            if (input[0] < 0.42701507) {
                if (input[7] < -0.7464926) {
                    if (input[6] < 0.6680634) {
                        if (input[3] < 4.464234) {
                            var16 = -0.031527575;
                        } else {
                            var16 = 0.14268608;
                        }
                    } else {
                        var16 = 0.32487947;
                    }
                } else {
                    if (input[1] < 2.0158093) {
                        if (input[2] < 0.28543535) {
                            var16 = 0.35475338;
                        } else {
                            var16 = 0.12797707;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var16 = 0.07500462;
                        } else {
                            var16 = -0.15026733;
                        }
                    }
                }
            } else {
                if (input[2] < 0.99105054) {
                    if (input[7] < -0.025550095) {
                        if (input[7] < -0.10175492) {
                            var16 = -0.0070200902;
                        } else {
                            var16 = 0.28563166;
                        }
                    } else {
                        if (input[1] < 0.78892344) {
                            var16 = -0.21958543;
                        } else {
                            var16 = 0.00878413;
                        }
                    }
                } else {
                    if (input[7] < -0.025550095) {
                        if (input[6] < -1.1579646) {
                            var16 = 0.074784346;
                        } else {
                            var16 = -0.0076498855;
                        }
                    } else {
                        if (input[1] < 0.78892344) {
                            var16 = 0.009453032;
                        } else {
                            var16 = 0.35658035;
                        }
                    }
                }
            }
        }
    }
    var var17;
    if (input[3] < 6.108913) {
        if (input[1] < 3.7881289) {
            if (input[4] < 4.0868635) {
                if (input[1] < 2.524518) {
                    if (input[1] < 2.0158093) {
                        if (input[1] < 0.019059421) {
                            var17 = -0.0007766443;
                        } else {
                            var17 = 0.007924243;
                        }
                    } else {
                        if (input[0] < -0.33756137) {
                            var17 = -0.31581163;
                        } else {
                            var17 = -0.017109724;
                        }
                    }
                } else {
                    if (input[3] < 4.464234) {
                        if (input[7] < -0.2561061) {
                            var17 = -0.010622361;
                        } else {
                            var17 = 0.08845078;
                        }
                    } else {
                        if (input[1] < 2.9135306) {
                            var17 = 0.5716114;
                        } else {
                            var17 = -0.008125061;
                        }
                    }
                }
            } else {
                if (input[7] < -0.6595239) {
                    if (input[7] < -0.78776014) {
                        if (input[7] < -0.88380086) {
                            var17 = -0.01057643;
                        } else {
                            var17 = 0.11085563;
                        }
                    } else {
                        var17 = -0.049910318;
                    }
                } else {
                    if (input[6] < 0.39564443) {
                        if (input[1] < 1.7886586) {
                            var17 = -0.115223564;
                        } else {
                            var17 = -0.20527367;
                        }
                    } else {
                        var17 = -0.0065810685;
                    }
                }
            }
        } else {
            if (input[6] < -0.49229905) {
                if (input[5] < 0.89645296) {
                    if (input[0] < -0.31805685) {
                        if (input[1] < 4.602879) {
                            var17 = 0.28808784;
                        } else {
                            var17 = -0.06527253;
                        }
                    } else {
                        if (input[7] < -0.2809543) {
                            var17 = -0.0112251025;
                        } else {
                            var17 = -0.11592166;
                        }
                    }
                } else {
                    if (input[7] < -0.4276074) {
                        if (input[0] < -0.29855236) {
                            var17 = 0.43367562;
                        } else {
                            var17 = 0.10768507;
                        }
                    } else {
                        if (input[4] < 1.3814222) {
                            var17 = -0.054730333;
                        } else {
                            var17 = 0.051034983;
                        }
                    }
                }
            } else {
                if (input[7] < -0.5956787) {
                    if (input[2] < 1.6966656) {
                        if (input[7] < -0.88380086) {
                            var17 = -0.0029746129;
                        } else {
                            var17 = -0.066922925;
                        }
                    } else {
                        var17 = 0.13749419;
                    }
                } else {
                    if (input[1] < 4.602879) {
                        var17 = -0.21842198;
                    } else {
                        if (input[0] < -0.29855236) {
                            var17 = -0.17388222;
                        } else {
                            var17 = -0.044322185;
                        }
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.34536317) {
            if (input[6] < -0.19405304) {
                var17 = -0.10826023;
            } else {
                var17 = 0.4487128;
            }
        } else {
            if (input[2] < -0.23563433) {
                if (input[0] < -0.29855236) {
                    if (input[6] < -0.65544695) {
                        var17 = -0.04162293;
                    } else {
                        var17 = -0.25058332;
                    }
                } else {
                    if (input[0] < -0.048894748) {
                        if (input[0] < -0.17372355) {
                            var17 = 0.050814174;
                        } else {
                            var17 = -0.008289403;
                        }
                    } else {
                        if (input[0] < 0.10714126) {
                            var17 = -0.16352253;
                        } else {
                            var17 = 0.0092358785;
                        }
                    }
                }
            } else {
                if (input[2] < 1.6966656) {
                    if (input[6] < -0.35537168) {
                        if (input[7] < -0.3922983) {
                            var17 = 0.06351678;
                        } else {
                            var17 = 0.24258232;
                        }
                    } else {
                        if (input[2] < 1.3709972) {
                            var17 = -0.05729915;
                        } else {
                            var17 = 0.21465892;
                        }
                    }
                } else {
                    if (input[0] < 2.221429) {
                        if (input[6] < -1.0831373) {
                            var17 = -0.19422238;
                        } else {
                            var17 = -0.051281013;
                        }
                    } else {
                        if (input[0] < 6.668455) {
                            var17 = 0.13649294;
                        } else {
                            var17 = 0.0014023944;
                        }
                    }
                }
            }
        }
    }
    var var18;
    if (input[4] < -0.35927713) {
        if (input[3] < -0.31081644) {
            if (input[4] < -0.36049208) {
                if (input[6] < 0.78802186) {
                    if (input[6] < 0.27955368) {
                        if (input[4] < -0.3774135) {
                            var18 = -0.004266577;
                        } else {
                            var18 = 0.0394877;
                        }
                    } else {
                        if (input[1] < -0.3726735) {
                            var18 = -0.03087592;
                        } else {
                            var18 = -0.32498938;
                        }
                    }
                } else {
                    if (input[1] < -0.41075867) {
                        if (input[4] < -0.39458382) {
                            var18 = 0.049165126;
                        } else {
                            var18 = -0.06720738;
                        }
                    } else {
                        if (input[6] < 0.8608831) {
                            var18 = 0.5973626;
                        } else {
                            var18 = -0.07150403;
                        }
                    }
                }
            } else {
                if (input[7] < 1.8501443) {
                    if (input[3] < -0.37112132) {
                        if (input[1] < -0.398517) {
                            var18 = -0.03861688;
                        } else {
                            var18 = 0.32744548;
                        }
                    } else {
                        if (input[7] < 0.0038255705) {
                            var18 = -0.045100205;
                        } else {
                            var18 = -0.49012887;
                        }
                    }
                } else {
                    if (input[0] < -0.34926406) {
                        if (input[6] < 0.066193745) {
                            var18 = -0.21010874;
                        } else {
                            var18 = 0.52727693;
                        }
                    } else {
                        var18 = 0.8542774;
                    }
                }
            }
        } else {
            if (input[6] < -0.17199324) {
                var18 = 0.32985786;
            } else {
                var18 = 1.3397579;
            }
        }
    } else {
        if (input[7] < 1.8294723) {
            if (input[7] < 1.2230927) {
                if (input[7] < 0.99799716) {
                    if (input[7] < 0.81429857) {
                        if (input[7] < 0.7395542) {
                            var18 = -0.0013868723;
                        } else {
                            var18 = -0.062358644;
                        }
                    } else {
                        if (input[6] < -0.46728474) {
                            var18 = 0.47730687;
                        } else {
                            var18 = 0.018455392;
                        }
                    }
                } else {
                    if (input[4] < -0.2680462) {
                        if (input[1] < -0.35091057) {
                            var18 = 0.024319168;
                        } else {
                            var18 = -0.31956598;
                        }
                    } else {
                        if (input[1] < -0.2808611) {
                            var18 = 0.35112542;
                        } else {
                            var18 = -0.07833747;
                        }
                    }
                }
            } else {
                if (input[2] < -0.25191775) {
                    if (input[1] < 1.9341983) {
                        if (input[7] < 1.3185877) {
                            var18 = -0.036400188;
                        } else {
                            var18 = -0.30318415;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var18 = -0.013139606;
                        } else {
                            var18 = 0.1772755;
                        }
                    }
                } else {
                    if (input[1] < 0.5903366) {
                        if (input[1] < 0.019059421) {
                            var18 = 0.0420531;
                        } else {
                            var18 = 0.29128563;
                        }
                    } else {
                        if (input[1] < 1.3874043) {
                            var18 = -0.37170497;
                        } else {
                            var18 = 0.07863468;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 1.8501443) {
                if (input[4] < -0.17734224) {
                    if (input[2] < -0.25191775) {
                        if (input[0] < -0.34536317) {
                            var18 = -0.1843007;
                        } else {
                            var18 = 0.23176329;
                        }
                    } else {
                        if (input[4] < -0.3296353) {
                            var18 = -0.28392485;
                        } else {
                            var18 = -0.6722655;
                        }
                    }
                } else {
                    if (input[1] < -0.088395104) {
                        var18 = 0.7788076;
                    } else {
                        if (input[1] < -0.070712715) {
                            var18 = -0.47396538;
                        } else {
                            var18 = 0.102108814;
                        }
                    }
                }
            } else {
                if (input[1] < -0.36859298) {
                    if (input[4] < -0.35352442) {
                        if (input[1] < -0.38083464) {
                            var18 = -0.033382483;
                        } else {
                            var18 = 0.98887223;
                        }
                    } else {
                        if (input[7] < 3.0238564) {
                            var18 = -0.3887451;
                        } else {
                            var18 = 0.052988272;
                        }
                    }
                } else {
                    if (input[6] < 0.27955368) {
                        if (input[1] < -0.2740602) {
                            var18 = -0.16277753;
                        } else {
                            var18 = 0.056535814;
                        }
                    } else {
                        if (input[4] < -0.27812442) {
                            var18 = 0.23810306;
                        } else {
                            var18 = -0.08724895;
                        }
                    }
                }
            }
        }
    }
    var var19;
    if (input[1] < -0.42232025) {
        if (input[4] < -0.40466204) {
            if (input[6] < 0.05440067) {
                if (input[6] < 0.043039475) {
                    if (input[5] < 0.89645296) {
                        if (input[7] < 0.47277445) {
                            var19 = -0.062758796;
                        } else {
                            var19 = -0.021355154;
                        }
                    } else {
                        if (input[6] < -0.28669545) {
                            var19 = 0.15286337;
                        } else {
                            var19 = -0.0033411465;
                        }
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        var19 = 0.5507609;
                    } else {
                        var19 = 0.14884311;
                    }
                }
            } else {
                if (input[1] < -0.42708087) {
                    if (input[1] < -0.42776096) {
                        if (input[6] < 0.52116257) {
                            var19 = 0.05876765;
                        } else {
                            var19 = -0.042520918;
                        }
                    } else {
                        if (input[6] < 0.6924137) {
                            var19 = -0.264718;
                        } else {
                            var19 = 0.29442188;
                        }
                    }
                } else {
                    if (input[7] < 2.3104768) {
                        if (input[6] < 0.832688) {
                            var19 = -0.089152224;
                        } else {
                            var19 = 0.23852427;
                        }
                    } else {
                        var19 = -0.5993651;
                    }
                }
            }
        } else {
            if (input[7] < 1.5558425) {
                if (input[7] < 1.4277248) {
                    if (input[0] < -0.34536317) {
                        if (input[3] < -0.4588375) {
                            var19 = 0.24690285;
                        } else {
                            var19 = -0.0028618025;
                        }
                    } else {
                        if (input[6] < 0.7276644) {
                            var19 = 0.00078130193;
                        } else {
                            var19 = -0.13831633;
                        }
                    }
                } else {
                    var19 = -0.45659268;
                }
            } else {
                if (input[7] < 1.6732836) {
                    if (input[4] < -0.40226245) {
                        if (input[1] < -0.4243605) {
                            var19 = -0.24883826;
                        } else {
                            var19 = 0.051161744;
                        }
                    } else {
                        if (input[1] < -0.42300034) {
                            var19 = 0.32437542;
                        } else {
                            var19 = 0.92304516;
                        }
                    }
                } else {
                    if (input[1] < -0.42368042) {
                        if (input[6] < 0.3804174) {
                            var19 = 0.2432737;
                        } else {
                            var19 = -0.034294724;
                        }
                    } else {
                        if (input[6] < 0.78198916) {
                            var19 = -0.05475731;
                        } else {
                            var19 = 0.41694516;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.42027995) {
            if (input[6] < -0.07491647) {
                if (input[7] < 1.9305356) {
                    if (input[7] < 1.061024) {
                        if (input[6] < -0.119936556) {
                            var19 = 0.053296153;
                        } else {
                            var19 = 0.39797333;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var19 = -0.029664302;
                        } else {
                            var19 = -0.24526234;
                        }
                    }
                } else {
                    var19 = 0.36911002;
                }
            } else {
                if (input[6] < 0.78802186) {
                    if (input[7] < 1.9305356) {
                        if (input[7] < 1.5143926) {
                            var19 = -0.19502133;
                        } else {
                            var19 = 0.255244;
                        }
                    } else {
                        if (input[1] < -0.42164013) {
                            var19 = -0.02598262;
                        } else {
                            var19 = -0.46999076;
                        }
                    }
                } else {
                    if (input[5] < 0.89645296) {
                        if (input[0] < -0.34536317) {
                            var19 = -0.24927652;
                        } else {
                            var19 = 0.014248109;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var19 = 0.42557648;
                        } else {
                            var19 = 0.16080314;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 2.8045325) {
                if (input[7] < 2.5736654) {
                    if (input[0] < -0.34926406) {
                        if (input[1] < -0.3237069) {
                            var19 = -0.06826159;
                        } else {
                            var19 = 0.018284056;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var19 = 0.010180305;
                        } else {
                            var19 = -0.0016419106;
                        }
                    }
                } else {
                    if (input[1] < -0.4175596) {
                        var19 = -0.6388957;
                    } else {
                        if (input[1] < -0.41279894) {
                            var19 = 0.30049598;
                        } else {
                            var19 = -0.13226914;
                        }
                    }
                }
            } else {
                if (input[0] < -0.31805685) {
                    if (input[4] < -0.34710422) {
                        if (input[3] < -0.34371) {
                            var19 = 0.033867456;
                        } else {
                            var19 = -0.5594551;
                        }
                    } else {
                        if (input[1] < -0.37811425) {
                            var19 = -0.58564484;
                        } else {
                            var19 = 0.17970656;
                        }
                    }
                } else {
                    if (input[5] < 0.89645296) {
                        if (input[6] < 1.7796307) {
                            var19 = -0.45308462;
                        } else {
                            var19 = 0.23743151;
                        }
                    } else {
                        if (input[6] < 1.7796307) {
                            var19 = 0.15374029;
                        } else {
                            var19 = -0.30065158;
                        }
                    }
                }
            }
        }
    }
    var var20;
    if (input[2] < -0.25191775) {
        if (input[3] < -0.14634857) {
            if (input[4] < -0.2284052) {
                if (input[1] < -0.29514304) {
                    if (input[1] < -0.4093985) {
                        if (input[3] < -0.44513187) {
                            var20 = -0.0001192436;
                        } else {
                            var20 = 0.07243578;
                        }
                    } else {
                        if (input[6] < 0.8608831) {
                            var20 = -0.01800259;
                        } else {
                            var20 = -0.20449342;
                        }
                    }
                } else {
                    if (input[7] < 1.8906171) {
                        if (input[7] < 0.99799716) {
                            var20 = 0.017708814;
                        } else {
                            var20 = -0.18979475;
                        }
                    } else {
                        if (input[1] < -0.265219) {
                            var20 = 0.110410154;
                        } else {
                            var20 = 0.51678383;
                        }
                    }
                }
            } else {
                if (input[7] < 1.8915579) {
                    if (input[4] < -0.21541551) {
                        if (input[0] < -0.21273255) {
                            var20 = -0.25805774;
                        } else {
                            var20 = -0.0573379;
                        }
                    } else {
                        if (input[6] < 0.27955368) {
                            var20 = 0.030775148;
                        } else {
                            var20 = -0.13876621;
                        }
                    }
                } else {
                    var20 = -0.42124212;
                }
            }
        } else {
            if (input[7] < 0.16795768) {
                if (input[0] < 0.10714126) {
                    if (input[7] < -0.8641562) {
                        if (input[7] < -0.9128352) {
                            var20 = -0.0033182215;
                        } else {
                            var20 = 0.1340305;
                        }
                    } else {
                        if (input[3] < 0.0784242) {
                            var20 = -0.0042019035;
                        } else {
                            var20 = -0.05168824;
                        }
                    }
                } else {
                    if (input[6] < -0.23167802) {
                        if (input[6] < -1.191112) {
                            var20 = 0.03020889;
                        } else {
                            var20 = -0.03222953;
                        }
                    } else {
                        if (input[7] < -0.48579535) {
                            var20 = -0.0037639518;
                        } else {
                            var20 = 0.31758884;
                        }
                    }
                }
            } else {
                if (input[1] < -0.18496816) {
                    if (input[1] < -0.22577366) {
                        if (input[4] < -0.18630065) {
                            var20 = -0.2612673;
                        } else {
                            var20 = -0.03383396;
                        }
                    } else {
                        var20 = -0.5011398;
                    }
                } else {
                    if (input[1] < 0.059864935) {
                        if (input[7] < 1.3543984) {
                            var20 = -0.15374024;
                        } else {
                            var20 = 0.2204744;
                        }
                    } else {
                        if (input[6] < -0.61894906) {
                            var20 = -0.041996233;
                        } else {
                            var20 = -0.20665962;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < 3.0238564) {
            if (input[3] < -0.14634857) {
                if (input[1] < -0.070712715) {
                    if (input[1] < -0.11695896) {
                        if (input[1] < -0.14144227) {
                            var20 = -0.000624727;
                        } else {
                            var20 = -0.14818794;
                        }
                    } else {
                        if (input[7] < -0.3922983) {
                            var20 = -0.032861285;
                        } else {
                            var20 = 0.28560132;
                        }
                    }
                } else {
                    if (input[7] < -0.63063467) {
                        if (input[6] < -0.13631082) {
                            var20 = -0.056196343;
                        } else {
                            var20 = 0.02631331;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var20 = -0.063158505;
                        } else {
                            var20 = -0.21899618;
                        }
                    }
                }
            } else {
                if (input[0] < 0.10714126) {
                    if (input[1] < -0.24481624) {
                        if (input[1] < -0.265219) {
                            var20 = -0.34648895;
                        } else {
                            var20 = 0.35587907;
                        }
                    } else {
                        if (input[4] < -0.18331452) {
                            var20 = -0.049510647;
                        } else {
                            var20 = 0.027081324;
                        }
                    }
                } else {
                    if (input[4] < 0.3699975) {
                        if (input[1] < 0.7277152) {
                            var20 = -0.009971492;
                        } else {
                            var20 = -0.06191835;
                        }
                    } else {
                        if (input[4] < 0.40196866) {
                            var20 = 0.16245155;
                        } else {
                            var20 = 0.0006424084;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.39309075) {
                if (input[0] < -0.34536317) {
                    if (input[6] < 0.3804174) {
                        if (input[1] < -0.4243605) {
                            var20 = 0.63991773;
                        } else {
                            var20 = 0.044198547;
                        }
                    } else {
                        if (input[6] < 1.0982811) {
                            var20 = -0.12896416;
                        } else {
                            var20 = 0.22521788;
                        }
                    }
                } else {
                    var20 = 0.605356;
                }
            } else {
                if (input[3] < -0.34371) {
                    if (input[1] < -0.4080383) {
                        if (input[6] < 0.03295901) {
                            var20 = 0.6912707;
                        } else {
                            var20 = -0.08417035;
                        }
                    } else {
                        if (input[6] < 1.7796307) {
                            var20 = -0.40027988;
                        } else {
                            var20 = 0.20181678;
                        }
                    }
                } else {
                    if (input[1] < -0.3577115) {
                        var20 = 0.55865735;
                    } else {
                        if (input[0] < -0.31805685) {
                            var20 = 0.14929937;
                        } else {
                            var20 = -0.09555728;
                        }
                    }
                }
            }
        }
    }
    var var21;
    if (input[0] < 1.3632311) {
        if (input[3] < 2.2713292) {
            if (input[3] < 1.7779255) {
                if (input[4] < 0.5691924) {
                    if (input[0] < 1.0511591) {
                        if (input[2] < 0.16602354) {
                            var21 = 0.001068334;
                        } else {
                            var21 = -0.011891152;
                        }
                    } else {
                        if (input[4] < 0.19741817) {
                            var21 = 0.04507848;
                        } else {
                            var21 = -0.07840814;
                        }
                    }
                } else {
                    if (input[7] < -0.14663717) {
                        if (input[7] < -0.3457545) {
                            var21 = 0.010613962;
                        } else {
                            var21 = -0.08514403;
                        }
                    } else {
                        if (input[1] < 0.9303826) {
                            var21 = 0.120709404;
                        } else {
                            var21 = -0.17012526;
                        }
                    }
                }
            } else {
                if (input[1] < 1.1194482) {
                    if (input[7] < -0.9421113) {
                        if (input[2] < -0.23563433) {
                            var21 = 0.0026414127;
                        } else {
                            var21 = -0.034204353;
                        }
                    } else {
                        if (input[4] < 0.6199568) {
                            var21 = -0.0917633;
                        } else {
                            var21 = -0.2443773;
                        }
                    }
                } else {
                    if (input[6] < 0.16973469) {
                        if (input[6] < -0.31931022) {
                            var21 = 0.007454881;
                        } else {
                            var21 = -0.1106491;
                        }
                    } else {
                        if (input[1] < 2.524518) {
                            var21 = 0.42570704;
                        } else {
                            var21 = -0.066829965;
                        }
                    }
                }
            }
        } else {
            if (input[4] < 0.25714093) {
                if (input[6] < -0.9418565) {
                    var21 = 0.05933635;
                } else {
                    var21 = -0.2737597;
                }
            } else {
                if (input[4] < 0.45621684) {
                    if (input[0] < -0.29855236) {
                        if (input[7] < 0.90629166) {
                            var21 = 0.7978012;
                        } else {
                            var21 = 0.06505203;
                        }
                    } else {
                        if (input[6] < -0.9053535) {
                            var21 = 0.06691563;
                        } else {
                            var21 = -0.19472744;
                        }
                    }
                } else {
                    if (input[0] < -0.048894748) {
                        if (input[4] < 2.3638618) {
                            var21 = 0.024876734;
                        } else {
                            var21 = -0.12839577;
                        }
                    } else {
                        if (input[7] < -0.45000497) {
                            var21 = -0.0018923705;
                        } else {
                            var21 = 0.16590047;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.88870925) {
            if (input[7] < -0.5276498) {
                if (input[7] < -0.5956787) {
                    if (input[7] < -0.8777983) {
                        if (input[4] < 0.0033191522) {
                            var21 = 0.06738524;
                        } else {
                            var21 = -0.0036906195;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var21 = -0.06946592;
                        } else {
                            var21 = -0.03740754;
                        }
                    }
                } else {
                    if (input[1] < 0.22036663) {
                        if (input[1] < 0.18976249) {
                            var21 = 0.0620935;
                        } else {
                            var21 = -0.088416465;
                        }
                    } else {
                        var21 = 0.3620935;
                    }
                }
            } else {
                if (input[6] < -1.0831373) {
                    if (input[1] < 0.36182573) {
                        var21 = 0.18837875;
                    } else {
                        var21 = -0.0172939;
                    }
                } else {
                    if (input[2] < -0.25191775) {
                        if (input[0] < 2.221429) {
                            var21 = -0.12460943;
                        } else {
                            var21 = -0.0572665;
                        }
                    } else {
                        var21 = -0.19559556;
                    }
                }
            }
        } else {
            if (input[4] < 1.1574618) {
                if (input[2] < -0.061944436) {
                    if (input[7] < -0.6595239) {
                        if (input[2] < -0.24648994) {
                            var21 = 0.110222846;
                        } else {
                            var21 = -0.06764338;
                        }
                    } else {
                        if (input[7] < -0.45574433) {
                            var21 = 0.66540456;
                        } else {
                            var21 = 0.15128486;
                        }
                    }
                } else {
                    if (input[1] < 0.40535164) {
                        if (input[6] < -0.44490635) {
                            var21 = -0.04594735;
                        } else {
                            var21 = 0.27325505;
                        }
                    } else {
                        if (input[7] < -0.5956787) {
                            var21 = 0.03801032;
                        } else {
                            var21 = -0.21194424;
                        }
                    }
                }
            } else {
                if (input[4] < 1.6680914) {
                    if (input[7] < -0.35257557) {
                        if (input[7] < -0.7034) {
                            var21 = -0.004478226;
                        } else {
                            var21 = -0.072487794;
                        }
                    } else {
                        if (input[7] < 0.12012489) {
                            var21 = -0.35191685;
                        } else {
                            var21 = -0.0422488;
                        }
                    }
                } else {
                    if (input[0] < 2.221429) {
                        if (input[1] < 0.28293508) {
                            var21 = -0.04655006;
                        } else {
                            var21 = 0.15564603;
                        }
                    } else {
                        if (input[2] < -0.20849527) {
                            var21 = 0.052683953;
                        } else {
                            var21 = -0.010845859;
                        }
                    }
                }
            }
        }
    }
    var var22;
    if (input[3] < 6.108913) {
        if (input[3] < 5.2865734) {
            if (input[1] < 3.7881289) {
                if (input[3] < 4.464234) {
                    if (input[4] < 4.0868635) {
                        if (input[1] < 0.9303826) {
                            var22 = -0.0002641705;
                        } else {
                            var22 = 0.009308246;
                        }
                    } else {
                        if (input[7] < -0.6595239) {
                            var22 = -0.023341581;
                        } else {
                            var22 = -0.08666314;
                        }
                    }
                } else {
                    if (input[1] < 2.524518) {
                        if (input[4] < 1.5157983) {
                            var22 = 0.10031711;
                        } else {
                            var22 = -0.09697663;
                        }
                    } else {
                        if (input[0] < -0.048894748) {
                            var22 = 0.86414;
                        } else {
                            var22 = 0.040257875;
                        }
                    }
                }
            } else {
                if (input[6] < -0.49229905) {
                    if (input[5] < 0.89645296) {
                        if (input[0] < -0.31805685) {
                            var22 = 0.10626299;
                        } else {
                            var22 = -0.01676139;
                        }
                    } else {
                        if (input[7] < -0.4276074) {
                            var22 = 0.302306;
                        } else {
                            var22 = 0.014608306;
                        }
                    }
                } else {
                    if (input[1] < 4.602879) {
                        if (input[7] < -0.63063467) {
                            var22 = -0.0483614;
                        } else {
                            var22 = -0.16509962;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var22 = -0.11688065;
                        } else {
                            var22 = -0.013362411;
                        }
                    }
                }
            }
        } else {
            if (input[0] < 0.42701507) {
                if (input[6] < -0.10987096) {
                    var22 = -0.2131477;
                } else {
                    var22 = -0.035543956;
                }
            } else {
                if (input[2] < -0.20849527) {
                    if (input[6] < -1.4912626) {
                        var22 = -0.0035045028;
                    } else {
                        var22 = -0.08669524;
                    }
                } else {
                    if (input[1] < 2.9135306) {
                        if (input[1] < 2.524518) {
                            var22 = -0.000801673;
                        } else {
                            var22 = -0.0074505154;
                        }
                    } else {
                        if (input[0] < 1.207195) {
                            var22 = -0.0020480813;
                        } else {
                            var22 = 0.005128652;
                        }
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.34536317) {
            if (input[6] < -0.19405304) {
                var22 = -0.068103984;
            } else {
                var22 = 0.36016285;
            }
        } else {
            if (input[4] < 3.6508875) {
                if (input[6] < -0.7141563) {
                    if (input[1] < 4.602879) {
                        if (input[6] < -1.1724021) {
                            var22 = 0.016907532;
                        } else {
                            var22 = -0.14983283;
                        }
                    } else {
                        if (input[7] < -0.20251194) {
                            var22 = 0.047159657;
                        } else {
                            var22 = 0.24048288;
                        }
                    }
                } else {
                    if (input[7] < -0.5640289) {
                        if (input[7] < -0.98284286) {
                            var22 = 0.013397706;
                        } else {
                            var22 = -0.046720378;
                        }
                    } else {
                        var22 = -0.20071782;
                    }
                }
            } else {
                if (input[2] < 1.6966656) {
                    if (input[7] < -0.84411055) {
                        if (input[6] < -1.5962403) {
                            var22 = 0.03748662;
                        } else {
                            var22 = -0.014394356;
                        }
                    } else {
                        if (input[6] < -0.9723952) {
                            var22 = 0.39438027;
                        } else {
                            var22 = 0.06805008;
                        }
                    }
                } else {
                    if (input[0] < 2.221429) {
                        if (input[0] < 1.3632311) {
                            var22 = -0.020310529;
                        } else {
                            var22 = -0.14629455;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var22 = -0.049345482;
                        } else {
                            var22 = 0.037710942;
                        }
                    }
                }
            }
        }
    }
    var var23;
    if (input[7] < 3.0238564) {
        if (input[7] < 1.4711571) {
            if (input[7] < 1.3543984) {
                if (input[6] < 0.15939334) {
                    if (input[4] < -0.39906302) {
                        if (input[7] < 0.29901654) {
                            var23 = 0.0011528723;
                        } else {
                            var23 = 0.104562715;
                        }
                    } else {
                        if (input[4] < -0.39883906) {
                            var23 = -0.10042892;
                        } else {
                            var23 = -0.0028440782;
                        }
                    }
                } else {
                    if (input[4] < -0.27812442) {
                        if (input[3] < -0.31081644) {
                            var23 = 0.01169558;
                        } else {
                            var23 = 0.2620805;
                        }
                    } else {
                        if (input[7] < 1.2230927) {
                            var23 = -0.0028040009;
                        } else {
                            var23 = -0.23851013;
                        }
                    }
                }
            } else {
                if (input[1] < -0.4257207) {
                    if (input[1] < -0.42708087) {
                        var23 = 0.43673027;
                    } else {
                        var23 = 0.20525159;
                    }
                } else {
                    if (input[2] < -0.24648994) {
                        if (input[4] < -0.3777868) {
                            var23 = 0.0012076049;
                        } else {
                            var23 = -0.28322473;
                        }
                    } else {
                        if (input[2] < -0.18135624) {
                            var23 = 0.20383255;
                        } else {
                            var23 = -0.09262633;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.22373404) {
                if (input[0] < -0.17372355) {
                    if (input[1] < -0.2992236) {
                        if (input[6] < -0.17199324) {
                            var23 = -0.15512107;
                        } else {
                            var23 = 0.0013179354;
                        }
                    } else {
                        if (input[6] < 0.62617546) {
                            var23 = -0.037997663;
                        } else {
                            var23 = -0.30775362;
                        }
                    }
                } else {
                    var23 = 0.7759792;
                }
            } else {
                if (input[4] < -0.089251146) {
                    if (input[1] < -0.265219) {
                        if (input[6] < -0.16797942) {
                            var23 = 0.17464352;
                        } else {
                            var23 = -0.39257082;
                        }
                    } else {
                        if (input[3] < 0.16065814) {
                            var23 = 0.32976738;
                        } else {
                            var23 = -0.25546733;
                        }
                    }
                } else {
                    if (input[1] < -0.057110872) {
                        if (input[7] < 2.8045325) {
                            var23 = -0.4671331;
                        } else {
                            var23 = 0.22101869;
                        }
                    } else {
                        if (input[6] < -0.93383485) {
                            var23 = -0.41648942;
                        } else {
                            var23 = 0.09880579;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.40578184) {
            if (input[1] < -0.42844105) {
                if (input[6] < -0.33531734) {
                    var23 = -0.21432096;
                } else {
                    if (input[6] < 0.46406695) {
                        var23 = 0.18680406;
                    } else {
                        var23 = -0.08035672;
                    }
                }
            } else {
                var23 = -0.27299297;
            }
        } else {
            if (input[4] < -0.3324348) {
                if (input[4] < -0.33859372) {
                    if (input[1] < -0.3672328) {
                        if (input[6] < 0.46406695) {
                            var23 = 0.15225872;
                        } else {
                            var23 = -0.022030374;
                        }
                    } else {
                        var23 = -0.37342212;
                    }
                } else {
                    var23 = 0.6149389;
                }
            } else {
                if (input[6] < 0.807752) {
                    if (input[1] < 1.7886586) {
                        if (input[2] < -0.061944436) {
                            var23 = -0.16618115;
                        } else {
                            var23 = 0.22674967;
                        }
                    } else {
                        var23 = 0.2738557;
                    }
                } else {
                    if (input[1] < -0.30194396) {
                        var23 = -0.15393157;
                    } else {
                        if (input[0] < -0.26734516) {
                            var23 = 0.38796622;
                        } else {
                            var23 = 0.015722085;
                        }
                    }
                }
            }
        }
    }
    var var24;
    if (input[4] < -0.37442738) {
        if (input[1] < -0.38083464) {
            if (input[6] < 0.7829106) {
                if (input[0] < -0.29855236) {
                    if (input[6] < 0.22764193) {
                        if (input[4] < -0.376667) {
                            var24 = 0.0015573002;
                        } else {
                            var24 = 0.21388456;
                        }
                    } else {
                        if (input[3] < -0.40949714) {
                            var24 = -0.019929947;
                        } else {
                            var24 = -0.28439507;
                        }
                    }
                } else {
                    if (input[6] < -0.10987096) {
                        if (input[7] < 0.9396391) {
                            var24 = -0.045789037;
                        } else {
                            var24 = 0.71121585;
                        }
                    } else {
                        if (input[4] < -0.3856254) {
                            var24 = 0.19627187;
                        } else {
                            var24 = -0.23623751;
                        }
                    }
                }
            } else {
                if (input[3] < -0.4314262) {
                    if (input[1] < -0.42368042) {
                        if (input[3] < -0.46431977) {
                            var24 = 0.006579586;
                        } else {
                            var24 = -0.084911555;
                        }
                    } else {
                        if (input[1] < -0.41891977) {
                            var24 = 0.2081248;
                        } else {
                            var24 = -0.027670303;
                        }
                    }
                } else {
                    if (input[6] < 0.8608831) {
                        var24 = 1.0699908;
                    } else {
                        if (input[2] < -0.24648994) {
                            var24 = -0.06559338;
                        } else {
                            var24 = 0.88282794;
                        }
                    }
                }
            }
        } else {
            if (input[6] < 0.36121142) {
                if (input[6] < 0.3360177) {
                    if (input[7] < -0.24002784) {
                        if (input[7] < -0.48579535) {
                            var24 = -0.01065506;
                        } else {
                            var24 = 0.15021835;
                        }
                    } else {
                        if (input[4] < -0.38637194) {
                            var24 = 0.1448613;
                        } else {
                            var24 = -0.16830261;
                        }
                    }
                } else {
                    var24 = 0.5214;
                }
            } else {
                if (input[0] < -0.31805685) {
                    var24 = -0.53519964;
                } else {
                    var24 = -0.22511126;
                }
            }
        }
    } else {
        if (input[4] < -0.3733076) {
            if (input[7] < 1.8906171) {
                if (input[6] < 0.017391874) {
                    if (input[7] < 0.022583526) {
                        if (input[6] < -0.9894221) {
                            var24 = -0.07712529;
                        } else {
                            var24 = 0.0777178;
                        }
                    } else {
                        if (input[7] < 0.21016307) {
                            var24 = 1.2485093;
                        } else {
                            var24 = 0.20969643;
                        }
                    }
                } else {
                    if (input[7] < -0.07120625) {
                        var24 = 0.7380328;
                    } else {
                        if (input[6] < 0.87345564) {
                            var24 = -0.2737501;
                        } else {
                            var24 = 0.4254785;
                        }
                    }
                }
            } else {
                if (input[3] < -0.40949714) {
                    if (input[0] < -0.34536317) {
                        var24 = -0.41049394;
                    } else {
                        var24 = 0.7506722;
                    }
                } else {
                    var24 = 0.96384245;
                }
            }
        } else {
            if (input[4] < -0.37054542) {
                if (input[7] < 1.7161589) {
                    if (input[7] < 0.55423754) {
                        if (input[7] < 0.5512693) {
                            var24 = -0.07025905;
                        } else {
                            var24 = 0.29881775;
                        }
                    } else {
                        if (input[6] < -0.5125253) {
                            var24 = -0.05207758;
                        } else {
                            var24 = -0.33602494;
                        }
                    }
                } else {
                    if (input[1] < -0.39307627) {
                        var24 = 0.50784016;
                    } else {
                        var24 = -0.52610224;
                    }
                }
            } else {
                if (input[4] < -0.35927713) {
                    if (input[3] < -0.31081644) {
                        if (input[7] < 1.8294723) {
                            var24 = 0.0029795857;
                        } else {
                            var24 = 0.13245574;
                        }
                    } else {
                        if (input[6] < -0.17199324) {
                            var24 = 0.2539488;
                        } else {
                            var24 = 0.998656;
                        }
                    }
                } else {
                    if (input[4] < -0.34979174) {
                        if (input[7] < 1.5558425) {
                            var24 = -0.016602796;
                        } else {
                            var24 = -0.13280419;
                        }
                    } else {
                        if (input[7] < 1.8294723) {
                            var24 = 0.0022101938;
                        } else {
                            var24 = -0.02365862;
                        }
                    }
                }
            }
        }
    }
    var var25;
    if (input[1] < -0.39443648) {
        if (input[1] < -0.39579666) {
            if (input[6] < -0.5125253) {
                if (input[6] < -0.594532) {
                    if (input[7] < 1.4277248) {
                        if (input[7] < 0.88544947) {
                            var25 = -0.003124313;
                        } else {
                            var25 = 0.5481881;
                        }
                    } else {
                        var25 = -0.4334188;
                    }
                } else {
                    if (input[3] < -0.4314262) {
                        if (input[4] < -0.39906302) {
                            var25 = 0.18854158;
                        } else {
                            var25 = -0.09519597;
                        }
                    } else {
                        if (input[4] < -0.3733076) {
                            var25 = 0.66873395;
                        } else {
                            var25 = 0.0013414926;
                        }
                    }
                }
            } else {
                if (input[6] < -0.36445907) {
                    if (input[4] < -0.39458382) {
                        if (input[6] < -0.46728474) {
                            var25 = -0.24909265;
                        } else {
                            var25 = 0.12625585;
                        }
                    } else {
                        if (input[6] < -0.42728758) {
                            var25 = -0.0678538;
                        } else {
                            var25 = -0.17667452;
                        }
                    }
                } else {
                    if (input[1] < -0.42232025) {
                        if (input[1] < -0.4257207) {
                            var25 = -0.009639382;
                        } else {
                            var25 = 0.042692304;
                        }
                    } else {
                        if (input[4] < -0.39883906) {
                            var25 = -0.10480239;
                        } else {
                            var25 = -0.003068002;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 2.3104768) {
                if (input[6] < -0.10987096) {
                    if (input[6] < -0.19405304) {
                        if (input[6] < -0.5125253) {
                            var25 = -0.025428407;
                        } else {
                            var25 = -0.33354247;
                        }
                    } else {
                        var25 = 0.4056166;
                    }
                } else {
                    if (input[3] < -0.40949714) {
                        if (input[6] < 0.6409217) {
                            var25 = -0.2759377;
                        } else {
                            var25 = 0.085846975;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var25 = -0.24568774;
                        } else {
                            var25 = 0.09138467;
                        }
                    }
                }
            } else {
                var25 = 0.26521894;
            }
        }
    } else {
        if (input[1] < -0.38763556) {
            if (input[6] < -0.40693426) {
                if (input[4] < -0.36591688) {
                    if (input[7] < -0.2175183) {
                        if (input[7] < -0.82008153) {
                            var25 = 0.0133782355;
                        } else {
                            var25 = -0.06267357;
                        }
                    } else {
                        if (input[7] < 0.3372331) {
                            var25 = -0.20739749;
                        } else {
                            var25 = -0.034384824;
                        }
                    }
                } else {
                    if (input[6] < -0.63632345) {
                        if (input[7] < 0.1638199) {
                            var25 = -0.019758776;
                        } else {
                            var25 = -0.23023786;
                        }
                    } else {
                        if (input[7] < 0.022583526) {
                            var25 = -0.124241054;
                        } else {
                            var25 = 0.41655996;
                        }
                    }
                }
            } else {
                if (input[6] < -0.15497094) {
                    if (input[6] < -0.23778434) {
                        if (input[3] < -0.4314262) {
                            var25 = -0.11265796;
                        } else {
                            var25 = 0.3203879;
                        }
                    } else {
                        var25 = 0.7444592;
                    }
                } else {
                    if (input[6] < 0.18851979) {
                        if (input[5] < 0.89645296) {
                            var25 = 0.15003124;
                        } else {
                            var25 = -0.25021935;
                        }
                    } else {
                        if (input[3] < -0.40949714) {
                            var25 = 0.28326443;
                        } else {
                            var25 = 0.03938101;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.38263926) {
                if (input[3] < -0.40949714) {
                    if (input[5] < 0.89645296) {
                        if (input[7] < 0.9396391) {
                            var25 = -0.065714724;
                        } else {
                            var25 = 0.35681856;
                        }
                    } else {
                        if (input[1] < -0.36995316) {
                            var25 = -0.34156638;
                        } else {
                            var25 = 0.28508896;
                        }
                    }
                } else {
                    if (input[7] < 0.8062492) {
                        if (input[7] < -0.98284286) {
                            var25 = 0.013951015;
                        } else {
                            var25 = 0.40700218;
                        }
                    } else {
                        if (input[7] < 2.3104768) {
                            var25 = -0.2082075;
                        } else {
                            var25 = 0.092115045;
                        }
                    }
                }
            } else {
                if (input[4] < -0.3800264) {
                    if (input[0] < -0.34536317) {
                        var25 = -0.32062492;
                    } else {
                        if (input[6] < -0.10987096) {
                            var25 = 0.024365278;
                        } else {
                            var25 = 0.33906358;
                        }
                    }
                } else {
                    if (input[4] < -0.37054542) {
                        if (input[1] < -0.38491517) {
                            var25 = 0.24617915;
                        } else {
                            var25 = -0.13241279;
                        }
                    } else {
                        if (input[1] < -0.38627535) {
                            var25 = -0.10563893;
                        } else {
                            var25 = 0.0014726758;
                        }
                    }
                }
            }
        }
    }
    var var26;
    if (input[7] < 3.0238564) {
        if (input[7] < 2.4836273) {
            if (input[7] < 1.8915579) {
                if (input[3] < -0.4670609) {
                    if (input[6] < 0.39564443) {
                        if (input[1] < -0.42844105) {
                            var26 = 0.068371825;
                        } else {
                            var26 = -0.26355386;
                        }
                    } else {
                        if (input[7] < -0.98284286) {
                            var26 = 0.0132254725;
                        } else {
                            var26 = -0.2349493;
                        }
                    }
                } else {
                    if (input[4] < -0.40690163) {
                        if (input[6] < -0.28669545) {
                            var26 = 0.8774041;
                        } else {
                            var26 = 0.062848754;
                        }
                    } else {
                        if (input[1] < -0.39307627) {
                            var26 = -0.005763688;
                        } else {
                            var26 = 0.00150481;
                        }
                    }
                }
            } else {
                if (input[1] < -0.41143876) {
                    if (input[0] < -0.31805685) {
                        if (input[6] < 0.93331045) {
                            var26 = 0.022721935;
                        } else {
                            var26 = 0.3818792;
                        }
                    } else {
                        if (input[6] < -0.9479416) {
                            var26 = -0.3477721;
                        } else {
                            var26 = 0.5048851;
                        }
                    }
                } else {
                    if (input[1] < -0.4073582) {
                        if (input[2] < -0.24648994) {
                            var26 = -0.13868485;
                        } else {
                            var26 = -0.5418779;
                        }
                    } else {
                        if (input[1] < 1.1942582) {
                            var26 = -0.0014445735;
                        } else {
                            var26 = -0.30996907;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.40226245) {
                if (input[6] < 2.0145857) {
                    if (input[1] < -0.4257207) {
                        if (input[4] < -0.40578184) {
                            var26 = -0.35018948;
                        } else {
                            var26 = -0.1569103;
                        }
                    } else {
                        var26 = -0.4990705;
                    }
                } else {
                    var26 = 0.10866891;
                }
            } else {
                if (input[1] < -0.31418562) {
                    if (input[1] < -0.35499114) {
                        if (input[4] < -0.3840257) {
                            var26 = -0.051667985;
                        } else {
                            var26 = 0.097636126;
                        }
                    } else {
                        if (input[0] < -0.33756137) {
                            var26 = 0.9699935;
                        } else {
                            var26 = -0.06037207;
                        }
                    }
                } else {
                    if (input[1] < -0.23257458) {
                        if (input[3] < -0.14634857) {
                            var26 = -0.473568;
                        } else {
                            var26 = 0.33069414;
                        }
                    } else {
                        if (input[6] < 0.57522696) {
                            var26 = -0.1970955;
                        } else {
                            var26 = 0.14459957;
                        }
                    }
                }
            }
        }
    } else {
        if (input[6] < 0.066193745) {
            if (input[1] < -0.37811425) {
                if (input[4] < -0.3800264) {
                    if (input[4] < -0.38263926) {
                        if (input[1] < -0.4168795) {
                            var26 = -0.18656315;
                        } else {
                            var26 = 0.22396646;
                        }
                    } else {
                        var26 = -0.3934138;
                    }
                } else {
                    var26 = 0.68488276;
                }
            } else {
                if (input[3] < -0.31081644) {
                    var26 = -0.45289263;
                } else {
                    if (input[1] < 1.3874043) {
                        if (input[1] < 0.104751006) {
                            var26 = 0.043149542;
                        } else {
                            var26 = -0.27323017;
                        }
                    } else {
                        var26 = 0.23610535;
                    }
                }
            }
        } else {
            if (input[6] < 0.46406695) {
                if (input[4] < -0.30947888) {
                    if (input[2] < -0.25191775) {
                        if (input[1] < -0.42164013) {
                            var26 = -0.024353344;
                        } else {
                            var26 = 0.12130852;
                        }
                    } else {
                        if (input[1] < -0.4243605) {
                            var26 = 0.46422523;
                        } else {
                            var26 = 0.15395811;
                        }
                    }
                } else {
                    if (input[4] < -0.23893134) {
                        var26 = -0.22593258;
                    } else {
                        if (input[0] < -0.26734516) {
                            var26 = 0.0366967;
                        } else {
                            var26 = 0.1960652;
                        }
                    }
                }
            } else {
                if (input[1] < -0.30194396) {
                    if (input[4] < -0.39383727) {
                        if (input[4] < -0.40354225) {
                            var26 = -0.062311564;
                        } else {
                            var26 = 0.3151438;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var26 = 0.049948826;
                        } else {
                            var26 = -0.14026134;
                        }
                    }
                } else {
                    if (input[6] < 0.807752) {
                        if (input[4] < 0.25714093) {
                            var26 = -0.16945846;
                        } else {
                            var26 = 0.0222363;
                        }
                    } else {
                        if (input[0] < -0.26734516) {
                            var26 = 0.36561754;
                        } else {
                            var26 = 0.017014885;
                        }
                    }
                }
            }
        }
    }
    var var27;
    if (input[0] < -0.21273255) {
        if (input[1] < 0.25029066) {
            if (input[4] < 0.29745382) {
                if (input[4] < 0.06453499) {
                    if (input[3] < 0.5170052) {
                        if (input[3] < 0.24289207) {
                            var27 = 0.0027035673;
                        } else {
                            var27 = 0.12983947;
                        }
                    } else {
                        if (input[1] < 0.18976249) {
                            var27 = -0.21140374;
                        } else {
                            var27 = -0.030971766;
                        }
                    }
                } else {
                    if (input[6] < -0.42728758) {
                        if (input[6] < -0.7698551) {
                            var27 = -0.06447891;
                        } else {
                            var27 = 0.5780029;
                        }
                    } else {
                        if (input[4] < 0.13620232) {
                            var27 = 0.15345897;
                        } else {
                            var27 = -0.21997811;
                        }
                    }
                }
            } else {
                if (input[0] < -0.29855236) {
                    if (input[7] < 2.3132608) {
                        if (input[6] < -1.0206758) {
                            var27 = 0.024085369;
                        } else {
                            var27 = -0.309137;
                        }
                    } else {
                        var27 = 0.033862807;
                    }
                } else {
                    if (input[1] < 0.1387556) {
                        if (input[0] < -0.26734516) {
                            var27 = -0.035932615;
                        } else {
                            var27 = 0.030384101;
                        }
                    } else {
                        var27 = 0.19943562;
                    }
                }
            }
        } else {
            if (input[1] < 0.7277152) {
                if (input[4] < 0.3545637) {
                    if (input[7] < -0.5640289) {
                        if (input[7] < -0.59319484) {
                            var27 = -0.024479054;
                        } else {
                            var27 = 0.299637;
                        }
                    } else {
                        if (input[6] < -0.07491647) {
                            var27 = -0.2044659;
                        } else {
                            var27 = -0.033388697;
                        }
                    }
                } else {
                    if (input[4] < 0.6711477) {
                        if (input[3] < 0.5170052) {
                            var27 = -0.16927974;
                        } else {
                            var27 = 0.33216098;
                        }
                    } else {
                        if (input[6] < -0.93383485) {
                            var27 = -0.02334932;
                        } else {
                            var27 = -0.31834707;
                        }
                    }
                }
            } else {
                if (input[3] < 1.3393445) {
                    if (input[7] < -0.10175492) {
                        if (input[1] < 0.78892344) {
                            var27 = 0.28389436;
                        } else {
                            var27 = -0.03688503;
                        }
                    } else {
                        if (input[0] < -0.33756137) {
                            var27 = -0.066077866;
                        } else {
                            var27 = 0.24849525;
                        }
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        if (input[3] < 2.9292006) {
                            var27 = 0.0194607;
                        } else {
                            var27 = 0.17661153;
                        }
                    } else {
                        if (input[1] < 1.3357173) {
                            var27 = -0.1395165;
                        } else {
                            var27 = -0.028263452;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.280364) {
            if (input[7] < 0.81429857) {
                if (input[7] < -0.14663717) {
                    if (input[7] < -0.3457545) {
                        if (input[7] < -0.6595239) {
                            var27 = 0.0063464544;
                        } else {
                            var27 = -0.038036533;
                        }
                    } else {
                        if (input[4] < -0.3214234) {
                            var27 = -0.05737228;
                        } else {
                            var27 = 0.12032838;
                        }
                    }
                } else {
                    if (input[1] < -0.31826618) {
                        if (input[2] < -0.25191775) {
                            var27 = 0.22698432;
                        } else {
                            var27 = -0.057824902;
                        }
                    } else {
                        if (input[4] < -0.35763034) {
                            var27 = 0.19484526;
                        } else {
                            var27 = -0.13370633;
                        }
                    }
                }
            } else {
                if (input[1] < -0.3658726) {
                    if (input[1] < -0.3672328) {
                        if (input[6] < -0.22045057) {
                            var27 = -0.29548243;
                        } else {
                            var27 = -0.0584626;
                        }
                    } else {
                        var27 = 0.20321243;
                    }
                } else {
                    if (input[1] < -0.26997966) {
                        var27 = -0.4467;
                    } else {
                        if (input[0] < -0.17372355) {
                            var27 = 0.024701573;
                        } else {
                            var27 = -0.08209234;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 1.4277248) {
                if (input[4] < -0.25796798) {
                    if (input[7] < 0.8062492) {
                        if (input[6] < 0.27955368) {
                            var27 = -0.006643688;
                        } else {
                            var27 = 0.12508753;
                        }
                    } else {
                        if (input[4] < -0.2602076) {
                            var27 = 0.15358126;
                        } else {
                            var27 = 1.3313047;
                        }
                    }
                } else {
                    if (input[7] < 0.6728593) {
                        if (input[7] < 0.5080835) {
                            var27 = -0.0012562362;
                        } else {
                            var27 = 0.048421588;
                        }
                    } else {
                        if (input[3] < -0.34371) {
                            var27 = -0.23651883;
                        } else {
                            var27 = -0.015988106;
                        }
                    }
                }
            } else {
                if (input[2] < -0.13793376) {
                    if (input[2] < -0.23563433) {
                        if (input[1] < 0.104751006) {
                            var27 = 0.5537819;
                        } else {
                            var27 = -0.05769623;
                        }
                    } else {
                        if (input[6] < -0.7021178) {
                            var27 = -0.09622217;
                        } else {
                            var27 = -0.7096473;
                        }
                    }
                } else {
                    if (input[0] < -0.048894748) {
                        if (input[1] < -0.17952742) {
                            var27 = 0.09265858;
                        } else {
                            var27 = 1.0967398;
                        }
                    } else {
                        if (input[1] < -0.07615345) {
                            var27 = -0.28572673;
                        } else {
                            var27 = -0.000006784712;
                        }
                    }
                }
            }
        }
    }
    var var28;
    if (input[4] < -0.39010462) {
        if (input[1] < -0.4080383) {
            if (input[1] < -0.41279894) {
                if (input[6] < 0.9187714) {
                    if (input[6] < 0.87345564) {
                        if (input[1] < -0.4168795) {
                            var28 = -0.0018530316;
                        } else {
                            var28 = -0.06035177;
                        }
                    } else {
                        if (input[0] < -0.33756137) {
                            var28 = -0.07926774;
                        } else {
                            var28 = -0.44180265;
                        }
                    }
                } else {
                    if (input[1] < -0.4257207) {
                        if (input[7] < 2.2086458) {
                            var28 = -0.074036665;
                        } else {
                            var28 = 0.081036724;
                        }
                    } else {
                        if (input[4] < -0.39458382) {
                            var28 = 0.41730982;
                        } else {
                            var28 = 0.03687015;
                        }
                    }
                }
            } else {
                if (input[6] < 0.09249725) {
                    if (input[4] < -0.40226245) {
                        if (input[0] < -0.33756137) {
                            var28 = 0.13809085;
                        } else {
                            var28 = -0.030355323;
                        }
                    } else {
                        if (input[1] < -0.4100786) {
                            var28 = -0.092794895;
                        } else {
                            var28 = 0.032305997;
                        }
                    }
                } else {
                    if (input[3] < -0.44513187) {
                        if (input[6] < 0.23643003) {
                            var28 = -0.0005799294;
                        } else {
                            var28 = -0.16015126;
                        }
                    } else {
                        if (input[7] < -0.025550095) {
                            var28 = 0.070579715;
                        } else {
                            var28 = 0.5020537;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.4073582) {
                if (input[6] < -1.1579646) {
                    if (input[0] < -0.31805685) {
                        var28 = -0.11223585;
                    } else {
                        if (input[2] < -0.25191775) {
                            var28 = 0.011000901;
                        } else {
                            var28 = -0.013448525;
                        }
                    }
                } else {
                    var28 = -0.34542766;
                }
            } else {
                if (input[7] < 2.2242022) {
                    if (input[7] < 1.4711571) {
                        if (input[7] < 1.4277248) {
                            var28 = -0.05073297;
                        } else {
                            var28 = 0.5158365;
                        }
                    } else {
                        if (input[1] < -0.39307627) {
                            var28 = -0.40343145;
                        } else {
                            var28 = -0.06514932;
                        }
                    }
                } else {
                    if (input[6] < 0.78198916) {
                        if (input[1] < -0.38967583) {
                            var28 = 0.4734926;
                        } else {
                            var28 = -0.31287074;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var28 = -0.32686585;
                        } else {
                            var28 = 0.20188166;
                        }
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.34371) {
            if (input[6] < 0.9070014) {
                if (input[0] < -0.31805685) {
                    if (input[6] < 0.78802186) {
                        if (input[0] < -0.34536317) {
                            var28 = -0.017810835;
                        } else {
                            var28 = 0.04894336;
                        }
                    } else {
                        if (input[4] < -0.3889848) {
                            var28 = 0.7051872;
                        } else {
                            var28 = 0.056682862;
                        }
                    }
                } else {
                    if (input[1] < -0.36859298) {
                        if (input[2] < -0.23563433) {
                            var28 = -0.034438133;
                        } else {
                            var28 = 0.004734018;
                        }
                    } else {
                        if (input[1] < -0.36179206) {
                            var28 = 0.10735189;
                        } else {
                            var28 = 0.0027664343;
                        }
                    }
                }
            } else {
                if (input[7] < 0.5512693) {
                    if (input[0] < -0.34536317) {
                        var28 = 0.7057735;
                    } else {
                        if (input[6] < 1.2632518) {
                            var28 = 0.037248764;
                        } else {
                            var28 = -0.04019458;
                        }
                    }
                } else {
                    if (input[1] < -0.4080383) {
                        if (input[6] < 1.2632518) {
                            var28 = -0.35619333;
                        } else {
                            var28 = -0.030638777;
                        }
                    } else {
                        if (input[3] < -0.40949714) {
                            var28 = 0.22859266;
                        } else {
                            var28 = -0.13198158;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.33859372) {
                if (input[1] < -0.32098654) {
                    if (input[7] < 1.8501443) {
                        if (input[2] < -0.24648994) {
                            var28 = -0.044590697;
                        } else {
                            var28 = -0.20890749;
                        }
                    } else {
                        if (input[7] < 2.4836273) {
                            var28 = -0.42320183;
                        } else {
                            var28 = 0.004037202;
                        }
                    }
                } else {
                    if (input[1] < -0.30602452) {
                        if (input[6] < -0.17199324) {
                            var28 = 0.06913425;
                        } else {
                            var28 = 0.75826955;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var28 = 0.36644408;
                        } else {
                            var28 = -0.05204271;
                        }
                    }
                }
            } else {
                if (input[4] < -0.33411452) {
                    if (input[6] < -0.6382811) {
                        if (input[3] < -0.31081644) {
                            var28 = 0.017123356;
                        } else {
                            var28 = -0.20446737;
                        }
                    } else {
                        if (input[1] < -0.36043188) {
                            var28 = -0.10548955;
                        } else {
                            var28 = 0.61964834;
                        }
                    }
                } else {
                    if (input[4] < -0.30947888) {
                        if (input[7] < 2.5736654) {
                            var28 = -0.046335537;
                        } else {
                            var28 = 0.32695347;
                        }
                    } else {
                        if (input[7] < 1.4277248) {
                            var28 = -0.00058916805;
                        } else {
                            var28 = 0.024344236;
                        }
                    }
                }
            }
        }
    }
    var var29;
    if (input[7] < 1.5143926) {
        if (input[1] < -0.2808611) {
            if (input[1] < -0.28426158) {
                if (input[7] < 1.1771548) {
                    if (input[7] < 1.1330545) {
                        if (input[7] < 0.5080835) {
                            var29 = 0.00001798751;
                        } else {
                            var29 = 0.013156585;
                        }
                    } else {
                        if (input[4] < -0.3840257) {
                            var29 = -0.26832584;
                        } else {
                            var29 = 0.0100939;
                        }
                    }
                } else {
                    if (input[4] < -0.3684551) {
                        if (input[1] < -0.42708087) {
                            var29 = 0.2981608;
                        } else {
                            var29 = -0.0995786;
                        }
                    } else {
                        if (input[3] < -0.34371) {
                            var29 = 0.25734603;
                        } else {
                            var29 = 0.05079571;
                        }
                    }
                }
            } else {
                if (input[7] < 0.90629166) {
                    if (input[6] < -0.49068704) {
                        if (input[4] < -0.28753075) {
                            var29 = -0.14337872;
                        } else {
                            var29 = 0.04583517;
                        }
                    } else {
                        if (input[6] < -0.38885298) {
                            var29 = 0.6039907;
                        } else {
                            var29 = 0.0227384;
                        }
                    }
                } else {
                    var29 = 0.89121264;
                }
            }
        } else {
            if (input[1] < -0.25569773) {
                if (input[7] < 0.59282535) {
                    if (input[7] < 0.55423754) {
                        if (input[7] < 0.25839782) {
                            var29 = -0.013328636;
                        } else {
                            var29 = -0.13567747;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var29 = 0.64958394;
                        } else {
                            var29 = -0.19050305;
                        }
                    }
                } else {
                    if (input[6] < 0.10888186) {
                        if (input[4] < -0.22101451) {
                            var29 = -0.50588906;
                        } else {
                            var29 = -0.18644625;
                        }
                    } else {
                        if (input[1] < -0.26997966) {
                            var29 = 0.56080014;
                        } else {
                            var29 = -0.095162;
                        }
                    }
                }
            } else {
                if (input[1] < -0.24481624) {
                    if (input[7] < 0.7395542) {
                        if (input[5] < 0.89645296) {
                            var29 = -0.06039657;
                        } else {
                            var29 = 0.1863196;
                        }
                    } else {
                        if (input[1] < -0.250257) {
                            var29 = 0.13015515;
                        } else {
                            var29 = 1.4620646;
                        }
                    }
                } else {
                    if (input[7] < 0.7395542) {
                        if (input[7] < 0.6228381) {
                            var29 = 0.0003119657;
                        } else {
                            var29 = 0.1280735;
                        }
                    } else {
                        if (input[6] < -0.2619518) {
                            var29 = 0.052361626;
                        } else {
                            var29 = -0.10613973;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.22373404) {
            if (input[1] < -0.029907197) {
                if (input[2] < -0.23563433) {
                    if (input[2] < -0.24648994) {
                        if (input[1] < -0.070712715) {
                            var29 = -0.010897597;
                        } else {
                            var29 = 0.5883107;
                        }
                    } else {
                        if (input[1] < -0.41279894) {
                            var29 = 0.00090609683;
                        } else {
                            var29 = 0.14968134;
                        }
                    }
                } else {
                    if (input[1] < -0.38491517) {
                        if (input[6] < 0.13940509) {
                            var29 = 0.09745397;
                        } else {
                            var29 = -0.1513244;
                        }
                    } else {
                        if (input[4] < -0.2602076) {
                            var29 = -0.25208047;
                        } else {
                            var29 = 0.039264314;
                        }
                    }
                }
            } else {
                if (input[6] < -0.87364) {
                    if (input[1] < 0.104751006) {
                        if (input[1] < 0.028580708) {
                            var29 = -0.07933882;
                        } else {
                            var29 = 0.13312548;
                        }
                    } else {
                        var29 = 0.762649;
                    }
                } else {
                    if (input[7] < 1.7161589) {
                        if (input[2] < -0.24648994) {
                            var29 = 0.063053966;
                        } else {
                            var29 = -0.22399059;
                        }
                    } else {
                        if (input[1] < 0.019059421) {
                            var29 = -0.60338485;
                        } else {
                            var29 = -0.2876637;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 1.8294723) {
                if (input[3] < 0.24289207) {
                    if (input[1] < 0.0462631) {
                        if (input[0] < -0.29855236) {
                            var29 = 0.2805514;
                        } else {
                            var29 = -0.35268283;
                        }
                    } else {
                        if (input[6] < -0.17199324) {
                            var29 = 0.033040382;
                        } else {
                            var29 = 0.92561716;
                        }
                    }
                } else {
                    if (input[1] < 0.11495238) {
                        if (input[4] < -0.011611541) {
                            var29 = 0.013708163;
                        } else {
                            var29 = -0.72143227;
                        }
                    } else {
                        if (input[1] < 0.5168867) {
                            var29 = 0.37632015;
                        } else {
                            var29 = -0.10071381;
                        }
                    }
                }
            } else {
                if (input[4] < -0.22101451) {
                    if (input[0] < -0.34536317) {
                        var29 = 0.744745;
                    } else {
                        var29 = -0.040978506;
                    }
                } else {
                    if (input[1] < -0.19448943) {
                        if (input[7] < 2.2086458) {
                            var29 = -0.45657122;
                        } else {
                            var29 = -0.0070451647;
                        }
                    } else {
                        if (input[7] < 2.2086458) {
                            var29 = 0.18456057;
                        } else {
                            var29 = -0.08511132;
                        }
                    }
                }
            }
        }
    }
    var var30;
    if (input[7] < 2.5736654) {
        if (input[7] < 2.4836273) {
            if (input[4] < -0.40578184) {
                if (input[6] < 0.93331045) {
                    if (input[7] < 2.2086458) {
                        if (input[1] < -0.42776096) {
                            var30 = -0.04092234;
                        } else {
                            var30 = 0.018173594;
                        }
                    } else {
                        if (input[1] < -0.42708087) {
                            var30 = 0.078832485;
                        } else {
                            var30 = -0.4916558;
                        }
                    }
                } else {
                    if (input[7] < 1.7161589) {
                        var30 = 0.044551637;
                    } else {
                        var30 = 0.60973436;
                    }
                }
            } else {
                if (input[7] < 1.4711571) {
                    if (input[4] < -0.32664916) {
                        if (input[4] < -0.3273957) {
                            var30 = 0.0035934974;
                        } else {
                            var30 = 0.11967417;
                        }
                    } else {
                        if (input[4] < -0.30276006) {
                            var30 = -0.019317592;
                        } else {
                            var30 = 0.00060168916;
                        }
                    }
                } else {
                    if (input[6] < -0.11035498) {
                        if (input[3] < -0.4314262) {
                            var30 = -0.30187058;
                        } else {
                            var30 = 0.019578032;
                        }
                    } else {
                        if (input[1] < 0.40535164) {
                            var30 = 0.001916676;
                        } else {
                            var30 = -0.118288465;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.3840257) {
                if (input[1] < -0.42300034) {
                    if (input[1] < -0.42368042) {
                        if (input[6] < 0.25509757) {
                            var30 = 0.04331838;
                        } else {
                            var30 = -0.22752297;
                        }
                    } else {
                        var30 = 0.4330546;
                    }
                } else {
                    var30 = -0.43557763;
                }
            } else {
                if (input[4] < -0.36049208) {
                    if (input[0] < -0.34536317) {
                        var30 = -0.09582972;
                    } else {
                        if (input[1] < -0.35499114) {
                            var30 = 0.34179828;
                        } else {
                            var30 = 0.7570745;
                        }
                    }
                } else {
                    if (input[1] < -0.36315224) {
                        var30 = -0.6006998;
                    } else {
                        if (input[1] < -0.34274948) {
                            var30 = 0.3507792;
                        } else {
                            var30 = -0.20651108;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.40130264) {
            if (input[1] < -0.4243605) {
                if (input[4] < -0.40354225) {
                    if (input[6] < 1.1517857) {
                        if (input[6] < 0.46406695) {
                            var30 = 0.012668295;
                        } else {
                            var30 = -0.22749464;
                        }
                    } else {
                        if (input[1] < -0.42844105) {
                            var30 = -0.14302418;
                        } else {
                            var30 = 0.20347627;
                        }
                    }
                } else {
                    var30 = 0.517673;
                }
            } else {
                if (input[5] < 0.89645296) {
                    var30 = -0.07863611;
                } else {
                    var30 = -0.32690135;
                }
            }
        } else {
            if (input[1] < -0.42027995) {
                if (input[6] < 0.097515695) {
                    var30 = 0.5505531;
                } else {
                    if (input[6] < 0.9187714) {
                        if (input[6] < 0.3804174) {
                            var30 = 0.12620008;
                        } else {
                            var30 = -0.12300196;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var30 = 0.623554;
                        } else {
                            var30 = 0.13659899;
                        }
                    }
                }
            } else {
                if (input[4] < -0.40018284) {
                    var30 = 0.44788828;
                } else {
                    if (input[1] < -0.4175596) {
                        if (input[6] < 0.03295901) {
                            var30 = -0.13006015;
                        } else {
                            var30 = -0.5268777;
                        }
                    } else {
                        if (input[1] < -0.4148392) {
                            var30 = 0.18305367;
                        } else {
                            var30 = 0.009416848;
                        }
                    }
                }
            }
        }
    }
    var var31;
    if (input[1] < -0.35499114) {
        if (input[1] < -0.36179206) {
            if (input[6] < -0.5125253) {
                if (input[7] < 1.061024) {
                    if (input[4] < -0.3352343) {
                        if (input[7] < 0.7395542) {
                            var31 = 0.005746023;
                        } else {
                            var31 = -0.08534014;
                        }
                    } else {
                        if (input[7] < 0.7395542) {
                            var31 = 0.04890296;
                        } else {
                            var31 = 1.3370633;
                        }
                    }
                } else {
                    if (input[4] < -0.38069826) {
                        if (input[4] < -0.39309075) {
                            var31 = 0.17879488;
                        } else {
                            var31 = -0.3148639;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var31 = 0.21891923;
                        } else {
                            var31 = 0.8742307;
                        }
                    }
                }
            } else {
                if (input[6] < -0.46728474) {
                    if (input[4] < -0.38637194) {
                        if (input[4] < -0.40018284) {
                            var31 = 0.004539943;
                        } else {
                            var31 = -0.30743238;
                        }
                    } else {
                        if (input[4] < -0.38487887) {
                            var31 = 0.44794476;
                        } else {
                            var31 = -0.050797675;
                        }
                    }
                } else {
                    if (input[0] < -0.29855236) {
                        if (input[4] < -0.30499965) {
                            var31 = 0.000011242199;
                        } else {
                            var31 = 0.16360942;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var31 = -0.066363595;
                        } else {
                            var31 = -0.004847324;
                        }
                    }
                }
            }
        } else {
            if (input[6] < 0.7829106) {
                if (input[6] < 0.37091032) {
                    if (input[6] < -0.9418565) {
                        if (input[2] < -0.18135624) {
                            var31 = -0.027929256;
                        } else {
                            var31 = 0.15219682;
                        }
                    } else {
                        if (input[6] < -0.38885298) {
                            var31 = -0.1707115;
                        } else {
                            var31 = -0.04655858;
                        }
                    }
                } else {
                    if (input[7] < 0.25839782) {
                        if (input[6] < 0.41206968) {
                            var31 = -0.059552006;
                        } else {
                            var31 = -0.1626993;
                        }
                    } else {
                        if (input[4] < -0.35139146) {
                            var31 = -0.00065191987;
                        } else {
                            var31 = 0.49685183;
                        }
                    }
                }
            } else {
                if (input[6] < 0.9070014) {
                    if (input[0] < -0.34926406) {
                        var31 = -0.12059427;
                    } else {
                        var31 = -0.4350143;
                    }
                } else {
                    if (input[2] < -0.24648994) {
                        if (input[0] < -0.26734516) {
                            var31 = 0.02698617;
                        } else {
                            var31 = 0.002639039;
                        }
                    } else {
                        var31 = -0.029280417;
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.35091057) {
            if (input[6] < 0.46406695) {
                if (input[4] < -0.36591688) {
                    if (input[6] < -0.87364) {
                        if (input[1] < -0.35363096) {
                            var31 = 0.08866298;
                        } else {
                            var31 = 0.84903973;
                        }
                    } else {
                        if (input[7] < 0.032265052) {
                            var31 = -0.13522312;
                        } else {
                            var31 = 0.3808144;
                        }
                    }
                } else {
                    if (input[6] < 0.23643003) {
                        if (input[4] < -0.35927713) {
                            var31 = -0.17783849;
                        } else {
                            var31 = 0.049175147;
                        }
                    } else {
                        var31 = -0.5458407;
                    }
                }
            } else {
                if (input[2] < -0.25191775) {
                    if (input[0] < -0.34926406) {
                        var31 = 0.3079985;
                    } else {
                        if (input[6] < 0.9070014) {
                            var31 = 0.010267317;
                        } else {
                            var31 = -0.018301465;
                        }
                    }
                } else {
                    var31 = 0.68873334;
                }
            }
        } else {
            if (input[6] < -0.49229905) {
                if (input[7] < 0.5512693) {
                    if (input[4] < 0.020382801) {
                        if (input[2] < -0.23563433) {
                            var31 = 0.0033214225;
                        } else {
                            var31 = -0.028850423;
                        }
                    } else {
                        if (input[4] < 0.05856272) {
                            var31 = 0.10759968;
                        } else {
                            var31 = 0.0052760756;
                        }
                    }
                } else {
                    if (input[3] < -0.07507915) {
                        if (input[0] < -0.34536317) {
                            var31 = -0.3897306;
                        } else {
                            var31 = -0.09072088;
                        }
                    } else {
                        if (input[1] < -0.0027035202) {
                            var31 = 0.36745304;
                        } else {
                            var31 = -0.06378961;
                        }
                    }
                }
            } else {
                if (input[4] < -0.36994818) {
                    var31 = -0.32243228;
                } else {
                    if (input[4] < -0.089251146) {
                        if (input[1] < 0.07890751) {
                            var31 = 0.02504068;
                        } else {
                            var31 = -0.06938269;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var31 = -0.18413837;
                        } else {
                            var31 = -0.0035858895;
                        }
                    }
                }
            }
        }
    }
    var var32;
    if (input[5] < 0.89645296) {
        if (input[6] < 0.60563) {
            if (input[7] < 2.3104768) {
                if (input[7] < 2.0969927) {
                    if (input[0] < -0.048894748) {
                        if (input[2] < -0.18135624) {
                            var32 = 0.0010878913;
                        } else {
                            var32 = 0.04455662;
                        }
                    } else {
                        if (input[7] < 0.03758989) {
                            var32 = -0.0057900622;
                        } else {
                            var32 = -0.04739313;
                        }
                    }
                } else {
                    if (input[3] < -0.14634857) {
                        if (input[1] < -0.34274948) {
                            var32 = 0.15613045;
                        } else {
                            var32 = -0.3079218;
                        }
                    } else {
                        if (input[1] < 0.25029066) {
                            var32 = 0.5195396;
                        } else {
                            var32 = -0.19318248;
                        }
                    }
                }
            } else {
                if (input[1] < -0.40395775) {
                    if (input[2] < -0.25191775) {
                        if (input[1] < -0.4175596) {
                            var32 = -0.09563127;
                        } else {
                            var32 = 0.10559872;
                        }
                    } else {
                        var32 = -0.36997882;
                    }
                } else {
                    if (input[6] < -0.15497094) {
                        if (input[4] < -0.13702936) {
                            var32 = 0.34126028;
                        } else {
                            var32 = -0.026996555;
                        }
                    } else {
                        if (input[1] < -0.34274948) {
                            var32 = 0.12891547;
                        } else {
                            var32 = -0.31680712;
                        }
                    }
                }
            }
        } else {
            if (input[6] < 0.93331045) {
                if (input[1] < -0.3577115) {
                    if (input[1] < -0.37811425) {
                        if (input[6] < 0.89587814) {
                            var32 = 0.029570833;
                        } else {
                            var32 = 0.32633317;
                        }
                    } else {
                        if (input[1] < -0.3672328) {
                            var32 = -0.3970997;
                        } else {
                            var32 = -0.1500678;
                        }
                    }
                } else {
                    if (input[4] < -0.36350933) {
                        if (input[4] < -0.36591688) {
                            var32 = 0.13419855;
                        } else {
                            var32 = 1.298598;
                        }
                    } else {
                        if (input[1] < -0.30466434) {
                            var32 = 0.23918281;
                        } else {
                            var32 = 0.04707003;
                        }
                    }
                }
            } else {
                if (input[7] < -0.5640289) {
                    if (input[6] < 2.1701546) {
                        if (input[2] < 2.456559) {
                            var32 = 0.044595264;
                        } else {
                            var32 = -0.1039042;
                        }
                    } else {
                        if (input[1] < 0.30197766) {
                            var32 = 0.46972886;
                        } else {
                            var32 = -0.01929139;
                        }
                    }
                } else {
                    if (input[4] < 0.037659746) {
                        if (input[1] < -0.31826618) {
                            var32 = -0.06747627;
                        } else {
                            var32 = -0.2027293;
                        }
                    } else {
                        if (input[7] < -0.10175492) {
                            var32 = -0.17638841;
                        } else {
                            var32 = 0.29766968;
                        }
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.15998022) {
            if (input[0] < -0.31805685) {
                if (input[4] < -0.22101451) {
                    if (input[1] < 0.104751006) {
                        if (input[3] < 0.0784242) {
                            var32 = 0.00012691529;
                        } else {
                            var32 = 0.75213975;
                        }
                    } else {
                        if (input[1] < 0.36182573) {
                            var32 = 0.46754736;
                        } else {
                            var32 = -0.2574376;
                        }
                    }
                } else {
                    if (input[1] < -0.19448943) {
                        if (input[3] < -0.009292) {
                            var32 = -0.06148217;
                        } else {
                            var32 = 0.5860046;
                        }
                    } else {
                        if (input[0] < -0.33756137) {
                            var32 = -0.03314578;
                        } else {
                            var32 = -0.16405445;
                        }
                    }
                }
            } else {
                if (input[7] < -0.19674025) {
                    if (input[7] < -0.20251194) {
                        if (input[7] < -0.2334074) {
                            var32 = 0.005595112;
                        } else {
                            var32 = 0.22648905;
                        }
                    } else {
                        var32 = -0.26270342;
                    }
                } else {
                    if (input[7] < -0.17249921) {
                        if (input[1] < -0.021746093) {
                            var32 = 0.58701086;
                        } else {
                            var32 = 0.06766355;
                        }
                    } else {
                        if (input[1] < -0.2992236) {
                            var32 = -0.007144164;
                        } else {
                            var32 = 0.10988539;
                        }
                    }
                }
            }
        } else {
            if (input[6] < -0.07167272) {
                if (input[4] < -0.12045629) {
                    if (input[3] < -0.2559938) {
                        if (input[4] < -0.3684551) {
                            var32 = 0.004906209;
                        } else {
                            var32 = -0.067308754;
                        }
                    } else {
                        if (input[6] < -0.10987096) {
                            var32 = -0.06379193;
                        } else {
                            var32 = -0.45012257;
                        }
                    }
                } else {
                    if (input[4] < -0.089251146) {
                        if (input[7] < -0.3775862) {
                            var32 = 0.08287494;
                        } else {
                            var32 = 1.2555985;
                        }
                    } else {
                        if (input[3] < 0.62665045) {
                            var32 = -0.08745834;
                        } else {
                            var32 = 0.12164152;
                        }
                    }
                }
            } else {
                if (input[1] < 0.9303826) {
                    if (input[1] < 0.5903366) {
                        if (input[6] < -0.04427114) {
                            var32 = 0.037064727;
                        } else {
                            var32 = -0.005008012;
                        }
                    } else {
                        if (input[7] < -0.02155284) {
                            var32 = 0.06271033;
                        } else {
                            var32 = -0.32630122;
                        }
                    }
                } else {
                    if (input[7] < -0.43915075) {
                        if (input[0] < -0.17372355) {
                            var32 = -0.16493505;
                        } else {
                            var32 = -0.0122515885;
                        }
                    } else {
                        if (input[1] < 1.1942582) {
                            var32 = 0.3004925;
                        } else {
                            var32 = 0.0319628;
                        }
                    }
                }
            }
        }
    }
    var var33;
    if (input[1] < -0.41075867) {
        if (input[6] < 0.22764193) {
            if (input[7] < -0.25253314) {
                if (input[1] < -0.41279894) {
                    if (input[7] < -0.2809543) {
                        if (input[1] < -0.42776096) {
                            var33 = 0.05453724;
                        } else {
                            var33 = -0.01133324;
                        }
                    } else {
                        if (input[4] < -0.40578184) {
                            var33 = 0.0027038576;
                        } else {
                            var33 = -0.13370898;
                        }
                    }
                } else {
                    if (input[7] < -0.68485934) {
                        if (input[7] < -0.95559543) {
                            var33 = -0.005598727;
                        } else {
                            var33 = -0.045968324;
                        }
                    } else {
                        var33 = -0.10630447;
                    }
                }
            } else {
                if (input[7] < -0.2175183) {
                    if (input[1] < -0.41279894) {
                        if (input[7] < -0.2334074) {
                            var33 = 0.12808903;
                        } else {
                            var33 = 0.46289918;
                        }
                    } else {
                        var33 = 0.9594781;
                    }
                } else {
                    if (input[1] < -0.41143876) {
                        if (input[7] < 1.8915579) {
                            var33 = 0.013567828;
                        } else {
                            var33 = 0.13359466;
                        }
                    } else {
                        if (input[7] < -0.074516475) {
                            var33 = -0.08997677;
                        } else {
                            var33 = 0.688225;
                        }
                    }
                }
            }
        } else {
            if (input[6] < 0.48636204) {
                if (input[7] < 1.7161589) {
                    if (input[7] < 0.9396391) {
                        if (input[7] < 0.3372331) {
                            var33 = -0.0049743513;
                        } else {
                            var33 = -0.12640288;
                        }
                    } else {
                        if (input[1] < -0.42776096) {
                            var33 = 0.18211147;
                        } else {
                            var33 = -0.67157966;
                        }
                    }
                } else {
                    if (input[5] < 0.89645296) {
                        if (input[6] < 0.25509757) {
                            var33 = -0.16159722;
                        } else {
                            var33 = -0.04291825;
                        }
                    } else {
                        if (input[7] < 2.5736654) {
                            var33 = -0.0023144921;
                        } else {
                            var33 = 0.1566515;
                        }
                    }
                }
            } else {
                if (input[4] < -0.40018284) {
                    if (input[6] < 0.60563) {
                        if (input[1] < -0.42844105) {
                            var33 = -0.24603002;
                        } else {
                            var33 = 0.15740485;
                        }
                    } else {
                        if (input[1] < -0.41891977) {
                            var33 = -0.01761373;
                        } else {
                            var33 = -0.3212031;
                        }
                    }
                } else {
                    if (input[4] < -0.39883906) {
                        if (input[1] < -0.4168795) {
                            var33 = 0.19998266;
                        } else {
                            var33 = -0.44836742;
                        }
                    } else {
                        if (input[4] < -0.39682344) {
                            var33 = -0.3795836;
                        } else {
                            var33 = 0.018247036;
                        }
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.4314262) {
            if (input[7] < 0.99799716) {
                if (input[7] < 0.90629166) {
                    if (input[7] < 0.047918946) {
                        if (input[7] < -0.06745466) {
                            var33 = -0.020071149;
                        } else {
                            var33 = 0.21498722;
                        }
                    } else {
                        if (input[4] < -0.38637194) {
                            var33 = 0.011103531;
                        } else {
                            var33 = -0.14047754;
                        }
                    }
                } else {
                    if (input[1] < -0.4100786) {
                        if (input[2] < -0.25191775) {
                            var33 = -0.114365175;
                        } else {
                            var33 = -0.43870932;
                        }
                    } else {
                        if (input[4] < -0.39309075) {
                            var33 = 0.1773332;
                        } else {
                            var33 = 0.8298159;
                        }
                    }
                }
            } else {
                if (input[1] < -0.3998772) {
                    if (input[4] < -0.387865) {
                        if (input[6] < 0.807752) {
                            var33 = -0.05513415;
                        } else {
                            var33 = 0.1884273;
                        }
                    } else {
                        if (input[6] < 0.87345564) {
                            var33 = -0.3898131;
                        } else {
                            var33 = 0.26501405;
                        }
                    }
                } else {
                    if (input[4] < -0.3856254) {
                        if (input[7] < 1.4711571) {
                            var33 = 0.22975229;
                        } else {
                            var33 = -0.21421276;
                        }
                    } else {
                        if (input[6] < -0.07167272) {
                            var33 = -0.12017502;
                        } else {
                            var33 = 0.5410423;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.39010462) {
                if (input[0] < -0.34926406) {
                    var33 = -0.2734032;
                } else {
                    if (input[6] < 0.52116257) {
                        if (input[6] < -0.83312756) {
                            var33 = 0.0358615;
                        } else {
                            var33 = -0.11015851;
                        }
                    } else {
                        var33 = 0.12286978;
                    }
                }
            } else {
                if (input[4] < -0.35927713) {
                    if (input[3] < -0.31081644) {
                        if (input[7] < 0.55423754) {
                            var33 = 0.027927902;
                        } else {
                            var33 = -0.024248423;
                        }
                    } else {
                        if (input[6] < -0.11035498) {
                            var33 = 0.21129426;
                        } else {
                            var33 = 0.65583897;
                        }
                    }
                } else {
                    if (input[4] < -0.35763034) {
                        if (input[7] < 2.0969927) {
                            var33 = -0.0216407;
                        } else {
                            var33 = -0.2929445;
                        }
                    } else {
                        if (input[4] < -0.35427094) {
                            var33 = 0.049509123;
                        } else {
                            var33 = -0.00053598976;
                        }
                    }
                }
            }
        }
    }
    var var34;
    if (input[6] < 0.25509757) {
        if (input[1] < -0.4073582) {
            if (input[4] < -0.3884249) {
                if (input[1] < -0.42368042) {
                    if (input[6] < -0.93383485) {
                        if (input[6] < -1.565383) {
                            var34 = 0.010368687;
                        } else {
                            var34 = -0.11227202;
                        }
                    } else {
                        if (input[6] < -0.74489737) {
                            var34 = 0.14345507;
                        } else {
                            var34 = 0.013862553;
                        }
                    }
                } else {
                    if (input[0] < -0.33756137) {
                        if (input[4] < -0.39309075) {
                            var34 = -0.023452843;
                        } else {
                            var34 = -0.22922897;
                        }
                    } else {
                        if (input[7] < 1.8906171) {
                            var34 = -0.0012832044;
                        } else {
                            var34 = 0.5003098;
                        }
                    }
                }
            } else {
                if (input[7] < 2.3104768) {
                    if (input[0] < -0.33756137) {
                        if (input[6] < 0.19602472) {
                            var34 = 0.19878104;
                        } else {
                            var34 = -0.14809954;
                        }
                    } else {
                        if (input[7] < 2.0969927) {
                            var34 = 0.012744044;
                        } else {
                            var34 = -0.4551484;
                        }
                    }
                } else {
                    if (input[6] < 0.13940509) {
                        var34 = 0.7246282;
                    } else {
                        if (input[1] < -0.41279894) {
                            var34 = -0.25620568;
                        } else {
                            var34 = 0.4244829;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.40259758) {
                if (input[6] < 0.097515695) {
                    if (input[6] < 0.09249725) {
                        if (input[6] < 0.043039475) {
                            var34 = -0.03070126;
                        } else {
                            var34 = -0.24983962;
                        }
                    } else {
                        var34 = 0.6268765;
                    }
                } else {
                    if (input[4] < -0.39309075) {
                        if (input[6] < 0.18851979) {
                            var34 = -0.08564304;
                        } else {
                            var34 = 0.37819514;
                        }
                    } else {
                        if (input[4] < -0.3840257) {
                            var34 = -0.30925295;
                        } else {
                            var34 = -0.12117276;
                        }
                    }
                }
            } else {
                if (input[0] < -0.33756137) {
                    if (input[1] < -0.39715683) {
                        if (input[6] < -0.5125253) {
                            var34 = 0.05760583;
                        } else {
                            var34 = -0.31459916;
                        }
                    } else {
                        if (input[1] < -0.39579666) {
                            var34 = 0.18452728;
                        } else {
                            var34 = -0.018719632;
                        }
                    }
                } else {
                    if (input[7] < 1.8906171) {
                        if (input[7] < 1.8501443) {
                            var34 = -0.0002061844;
                        } else {
                            var34 = 0.10564777;
                        }
                    } else {
                        if (input[1] < -0.3917161) {
                            var34 = 0.31766546;
                        } else {
                            var34 = -0.112863116;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.27812442) {
            if (input[4] < -0.29436153) {
                if (input[4] < -0.36591688) {
                    if (input[1] < -0.38967583) {
                        if (input[1] < -0.39307627) {
                            var34 = -0.004335618;
                        } else {
                            var34 = 0.18357489;
                        }
                    } else {
                        if (input[6] < 0.36121142) {
                            var34 = 0.124731995;
                        } else {
                            var34 = -0.22934365;
                        }
                    }
                } else {
                    if (input[6] < 0.7829106) {
                        if (input[0] < -0.33756137) {
                            var34 = 0.18853396;
                        } else {
                            var34 = 0.034960736;
                        }
                    } else {
                        if (input[3] < -0.31081644) {
                            var34 = -0.03730233;
                        } else {
                            var34 = -0.37336874;
                        }
                    }
                }
            } else {
                if (input[4] < -0.29021826) {
                    if (input[7] < 2.2086458) {
                        if (input[0] < -0.17372355) {
                            var34 = 1.0259557;
                        } else {
                            var34 = -0.0942365;
                        }
                    } else {
                        var34 = -0.46016416;
                    }
                } else {
                    if (input[7] < -0.50263923) {
                        if (input[0] < -0.29855236) {
                            var34 = 1.0191239;
                        } else {
                            var34 = 0.14697969;
                        }
                    } else {
                        if (input[0] < -0.048894748) {
                            var34 = -0.12319919;
                        } else {
                            var34 = 0.36386862;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.2714056) {
                if (input[6] < 0.78802186) {
                    if (input[0] < -0.21273255) {
                        if (input[7] < -0.025550095) {
                            var34 = -0.0346329;
                        } else {
                            var34 = -0.40728274;
                        }
                    } else {
                        if (input[0] < -0.12691276) {
                            var34 = -0.08516604;
                        } else {
                            var34 = 0.16793801;
                        }
                    }
                } else {
                    if (input[7] < 1.8501443) {
                        if (input[6] < 0.8608831) {
                            var34 = -0.1949756;
                        } else {
                            var34 = -0.0010273978;
                        }
                    } else {
                        var34 = 0.28682765;
                    }
                }
            } else {
                if (input[1] < -0.38015452) {
                    if (input[7] < 0.3372331) {
                        if (input[6] < 0.3804174) {
                            var34 = 0.029688586;
                        } else {
                            var34 = -0.03293388;
                        }
                    } else {
                        if (input[6] < 0.9070014) {
                            var34 = -0.19639222;
                        } else {
                            var34 = -0.005271352;
                        }
                    }
                } else {
                    if (input[7] < 2.2086458) {
                        if (input[7] < 1.5143926) {
                            var34 = 0.0011838546;
                        } else {
                            var34 = 0.15601856;
                        }
                    } else {
                        if (input[4] < -0.22661352) {
                            var34 = -0.39556274;
                        } else {
                            var34 = -0.0028434303;
                        }
                    }
                }
            }
        }
    }
    var var35;
    if (input[7] < 1.9305356) {
        if (input[7] < 1.4711571) {
            if (input[7] < 0.9725973) {
                if (input[4] < -0.39906302) {
                    if (input[7] < 0.29901654) {
                        if (input[7] < -0.10175492) {
                            var35 = 0.0144687975;
                        } else {
                            var35 = -0.045369975;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var35 = -0.038337115;
                        } else {
                            var35 = 0.09365307;
                        }
                    }
                } else {
                    if (input[4] < -0.39883906) {
                        if (input[7] < 0.39379358) {
                            var35 = -0.04583819;
                        } else {
                            var35 = -0.25774768;
                        }
                    } else {
                        if (input[7] < 0.8547546) {
                            var35 = 0.00014792656;
                        } else {
                            var35 = -0.047160685;
                        }
                    }
                }
            } else {
                if (input[2] < -0.18135624) {
                    if (input[4] < -0.40018284) {
                        if (input[3] < -0.4588375) {
                            var35 = -0.0047950437;
                        } else {
                            var35 = -0.24149774;
                        }
                    } else {
                        if (input[7] < 1.4277248) {
                            var35 = 0.06331094;
                        } else {
                            var35 = -0.14419541;
                        }
                    }
                } else {
                    if (input[7] < 1.4277248) {
                        if (input[2] < -0.13793376) {
                            var35 = -0.3414896;
                        } else {
                            var35 = -0.048896708;
                        }
                    } else {
                        if (input[2] < -0.061944436) {
                            var35 = 0.019439543;
                        } else {
                            var35 = 0.64705926;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.18331452) {
                if (input[1] < -0.250257) {
                    if (input[6] < -0.83312756) {
                        if (input[5] < 0.89645296) {
                            var35 = 0.58349717;
                        } else {
                            var35 = 0.013494391;
                        }
                    } else {
                        if (input[1] < -0.3386689) {
                            var35 = -0.031415872;
                        } else {
                            var35 = 0.066769466;
                        }
                    }
                } else {
                    if (input[2] < -0.20849527) {
                        if (input[6] < 0.6680634) {
                            var35 = 0.021193763;
                        } else {
                            var35 = -0.48987424;
                        }
                    } else {
                        if (input[4] < -0.18630065) {
                            var35 = -0.6247033;
                        } else {
                            var35 = 0.19360322;
                        }
                    }
                }
            } else {
                if (input[4] < -0.1549462) {
                    if (input[6] < 0.60563) {
                        if (input[5] < 0.89645296) {
                            var35 = -0.08241381;
                        } else {
                            var35 = 0.67162114;
                        }
                    } else {
                        var35 = -0.4825885;
                    }
                } else {
                    if (input[1] < 0.028580708) {
                        if (input[4] < -0.06984124) {
                            var35 = 0.066700116;
                        } else {
                            var35 = -0.3289607;
                        }
                    } else {
                        if (input[1] < 0.5168867) {
                            var35 = 0.26821968;
                        } else {
                            var35 = -0.06308876;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.40466204) {
            if (input[1] < -0.42708087) {
                if (input[7] < 2.2086458) {
                    if (input[3] < -0.4670609) {
                        if (input[1] < -0.42844105) {
                            var35 = 0.018140255;
                        } else {
                            var35 = -0.064556286;
                        }
                    } else {
                        var35 = -0.5520418;
                    }
                } else {
                    if (input[1] < -0.42776096) {
                        if (input[7] < 2.3104768) {
                            var35 = 0.09407237;
                        } else {
                            var35 = -0.00980505;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var35 = 0.31509176;
                        } else {
                            var35 = -0.09179728;
                        }
                    }
                }
            } else {
                if (input[7] < 2.3104768) {
                    if (input[0] < -0.34926406) {
                        var35 = 0.19590762;
                    } else {
                        if (input[1] < -0.4257207) {
                            var35 = -0.058142684;
                        } else {
                            var35 = -0.24153385;
                        }
                    }
                } else {
                    var35 = -0.36325586;
                }
            }
        } else {
            if (input[7] < 2.2086458) {
                if (input[1] < 0.20812498) {
                    if (input[1] < 0.028580708) {
                        if (input[4] < -0.29021826) {
                            var35 = 0.12215997;
                        } else {
                            var35 = -0.14697252;
                        }
                    } else {
                        var35 = 0.8318673;
                    }
                } else {
                    if (input[0] < -0.34926406) {
                        if (input[1] < 0.85625255) {
                            var35 = -0.012735129;
                        } else {
                            var35 = 0.10541883;
                        }
                    } else {
                        var35 = -0.38339248;
                    }
                }
            } else {
                if (input[4] < -0.13702936) {
                    if (input[1] < -0.26249865) {
                        if (input[3] < -0.19568892) {
                            var35 = 0.009485413;
                        } else {
                            var35 = -0.24413975;
                        }
                    } else {
                        if (input[1] < -0.25841808) {
                            var35 = 0.6826936;
                        } else {
                            var35 = 0.081359535;
                        }
                    }
                } else {
                    if (input[7] < 2.2242022) {
                        if (input[1] < -0.14144227) {
                            var35 = -0.070169955;
                        } else {
                            var35 = -0.4864825;
                        }
                    } else {
                        if (input[1] < -0.070712715) {
                            var35 = -0.30385405;
                        } else {
                            var35 = 0.034325715;
                        }
                    }
                }
            }
        }
    }
    var var36;
    if (input[6] < -1.2959688) {
        if (input[7] < -0.48579535) {
            if (input[2] < 1.9137781) {
                if (input[1] < -0.088395104) {
                    if (input[4] < -0.3684551) {
                        if (input[6] < -1.3962598) {
                            var36 = 0.0009125467;
                        } else {
                            var36 = -0.0537311;
                        }
                    } else {
                        if (input[4] < -0.36591688) {
                            var36 = 0.20630144;
                        } else {
                            var36 = 0.0119928;
                        }
                    }
                } else {
                    if (input[7] < -0.68485934) {
                        if (input[2] < -0.23563433) {
                            var36 = 0.0073367846;
                        } else {
                            var36 = -0.01897525;
                        }
                    } else {
                        if (input[4] < 0.88870925) {
                            var36 = -0.061621077;
                        } else {
                            var36 = 0.07501873;
                        }
                    }
                }
            } else {
                if (input[0] < 1.3632311) {
                    var36 = 0.60120595;
                } else {
                    if (input[0] < 3.5477352) {
                        var36 = -0.035274245;
                    } else {
                        var36 = -0.010199074;
                    }
                }
            }
        } else {
            if (input[2] < -0.18135624) {
                if (input[2] < -0.23563433) {
                    if (input[1] < -0.3917161) {
                        if (input[2] < -0.25191775) {
                            var36 = 0.039643236;
                        } else {
                            var36 = -0.15027988;
                        }
                    } else {
                        if (input[2] < -0.24648994) {
                            var36 = 0.042572815;
                        } else {
                            var36 = 0.19974045;
                        }
                    }
                } else {
                    if (input[4] < -0.280364) {
                        if (input[1] < -0.36859298) {
                            var36 = -0.0017067612;
                        } else {
                            var36 = -0.20035948;
                        }
                    } else {
                        if (input[6] < -1.3962598) {
                            var36 = 0.112301774;
                        } else {
                            var36 = -0.14968461;
                        }
                    }
                }
            } else {
                if (input[0] < -0.17372355) {
                    if (input[7] < -0.17249921) {
                        if (input[1] < -0.021746093) {
                            var36 = 0.83631074;
                        } else {
                            var36 = -0.05311257;
                        }
                    } else {
                        if (input[1] < -0.2740602) {
                            var36 = -0.14389417;
                        } else {
                            var36 = 0.6738453;
                        }
                    }
                } else {
                    if (input[1] < 0.40535164) {
                        if (input[0] < -0.12691276) {
                            var36 = -0.032763794;
                        } else {
                            var36 = -0.19650027;
                        }
                    } else {
                        var36 = 0.08379779;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.34026033) {
            if (input[1] < -0.42776096) {
                if (input[7] < -0.64198405) {
                    var36 = -0.07783752;
                } else {
                    if (input[6] < -0.9418565) {
                        var36 = -0.051469393;
                    } else {
                        var36 = 0.2576025;
                    }
                }
            } else {
                if (input[7] < 1.4711571) {
                    if (input[4] < -0.40226245) {
                        if (input[7] < 0.8062492) {
                            var36 = -0.10727704;
                        } else {
                            var36 = 0.020154007;
                        }
                    } else {
                        if (input[4] < -0.39309075) {
                            var36 = 0.04883037;
                        } else {
                            var36 = -0.0049548806;
                        }
                    }
                } else {
                    if (input[6] < -0.83312756) {
                        if (input[4] < -0.23893134) {
                            var36 = 0.16241068;
                        } else {
                            var36 = -0.23154859;
                        }
                    } else {
                        if (input[4] < -0.22373404) {
                            var36 = -0.18928261;
                        } else {
                            var36 = 0.008873502;
                        }
                    }
                }
            }
        } else {
            if (input[5] < 0.89645296) {
                if (input[0] < 1.5972852) {
                    if (input[2] < 0.99105054) {
                        if (input[2] < 0.057467364) {
                            var36 = 0.013372945;
                        } else {
                            var36 = -0.039090388;
                        }
                    } else {
                        if (input[7] < -0.5956787) {
                            var36 = 0.008445186;
                        } else {
                            var36 = 0.50153905;
                        }
                    }
                } else {
                    if (input[7] < -0.4576201) {
                        if (input[2] < 2.456559) {
                            var36 = -0.012386382;
                        } else {
                            var36 = -0.08265124;
                        }
                    } else {
                        if (input[0] < 4.483951) {
                            var36 = -0.15702793;
                        } else {
                            var36 = 0.089060366;
                        }
                    }
                }
            } else {
                if (input[1] < 0.9303826) {
                    if (input[1] < 0.5903366) {
                        if (input[4] < 1.055933) {
                            var36 = -0.0023889213;
                        } else {
                            var36 = -0.038661808;
                        }
                    } else {
                        if (input[7] < -0.02155284) {
                            var36 = 0.006593418;
                        } else {
                            var36 = -0.26018712;
                        }
                    }
                } else {
                    if (input[4] < 0.45621684) {
                        if (input[7] < 0.8547546) {
                            var36 = 0.7129185;
                        } else {
                            var36 = 0.05574416;
                        }
                    } else {
                        if (input[6] < 0.066193745) {
                            var36 = -0.077486105;
                        } else {
                            var36 = 0.032320216;
                        }
                    }
                }
            }
        }
    }
    var var37;
    if (input[6] < 0.7276644) {
        if (input[6] < 0.5399172) {
            if (input[6] < 0.30664396) {
                if (input[1] < -0.42844105) {
                    if (input[7] < -0.19674025) {
                        if (input[6] < -0.28669545) {
                            var37 = -0.14917892;
                        } else {
                            var37 = -0.029071176;
                        }
                    } else {
                        if (input[6] < -0.33531734) {
                            var37 = 0.016058523;
                        } else {
                            var37 = 0.14936487;
                        }
                    }
                } else {
                    if (input[3] < -0.19568892) {
                        if (input[4] < -0.35352442) {
                            var37 = 0.0017260397;
                        } else {
                            var37 = -0.010137299;
                        }
                    } else {
                        if (input[1] < -0.18496816) {
                            var37 = 0.020987969;
                        } else {
                            var37 = -0.0009989718;
                        }
                    }
                }
            } else {
                if (input[4] < -0.35427094) {
                    if (input[1] < -0.3386689) {
                        if (input[7] < 0.19140512) {
                            var37 = 0.013013511;
                        } else {
                            var37 = -0.047856282;
                        }
                    } else {
                        if (input[0] < -0.26734516) {
                            var37 = -0.41517133;
                        } else {
                            var37 = -0.10769317;
                        }
                    }
                } else {
                    if (input[4] < -0.32664916) {
                        if (input[0] < -0.33756137) {
                            var37 = 0.8239021;
                        } else {
                            var37 = 0.1273008;
                        }
                    } else {
                        if (input[3] < -0.19568892) {
                            var37 = 0.06556393;
                        } else {
                            var37 = -0.0334647;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.39906302) {
                if (input[1] < -0.4243605) {
                    if (input[7] < 1.5832454) {
                        if (input[1] < -0.42776096) {
                            var37 = -0.18906209;
                        } else {
                            var37 = 0.15500847;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var37 = -0.251034;
                        } else {
                            var37 = -0.050410595;
                        }
                    }
                } else {
                    if (input[6] < 0.60563) {
                        if (input[4] < -0.40018284) {
                            var37 = 0.21444128;
                        } else {
                            var37 = -0.23005685;
                        }
                    } else {
                        if (input[7] < 1.5558425) {
                            var37 = -0.0037952366;
                        } else {
                            var37 = 0.74847746;
                        }
                    }
                }
            } else {
                if (input[4] < -0.39458382) {
                    if (input[6] < 0.60563) {
                        var37 = 0.3270215;
                    } else {
                        if (input[6] < 0.62617546) {
                            var37 = -0.04481351;
                        } else {
                            var37 = -0.33905673;
                        }
                    }
                } else {
                    if (input[4] < -0.38487887) {
                        if (input[0] < -0.34536317) {
                            var37 = 1.0834236;
                        } else {
                            var37 = 0.0062831515;
                        }
                    } else {
                        if (input[4] < -0.3811462) {
                            var37 = -0.49242562;
                        } else {
                            var37 = -0.025285644;
                        }
                    }
                }
            }
        }
    } else {
        if (input[5] < 0.89645296) {
            if (input[1] < -0.42708087) {
                var37 = 0.47851586;
            } else {
                if (input[4] < -0.40130264) {
                    if (input[7] < -0.5476583) {
                        if (input[1] < -0.4243605) {
                            var37 = 0.033941675;
                        } else {
                            var37 = -0.022710228;
                        }
                    } else {
                        if (input[1] < -0.42027995) {
                            var37 = -0.24953036;
                        } else {
                            var37 = -0.072417565;
                        }
                    }
                } else {
                    if (input[7] < 1.8294723) {
                        if (input[7] < 0.99799716) {
                            var37 = 0.035054266;
                        } else {
                            var37 = -0.16939802;
                        }
                    } else {
                        if (input[1] < -0.31826618) {
                            var37 = 0.3027197;
                        } else {
                            var37 = -0.063244656;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.38637194) {
                if (input[4] < -0.40018284) {
                    if (input[6] < 0.7594882) {
                        if (input[1] < -0.4257207) {
                            var37 = -0.3215398;
                        } else {
                            var37 = 1.1567559;
                        }
                    } else {
                        if (input[1] < -0.41891977) {
                            var37 = 0.003714944;
                        } else {
                            var37 = -0.24622862;
                        }
                    }
                } else {
                    if (input[6] < 0.832688) {
                        if (input[1] < -0.41891977) {
                            var37 = 0.28858572;
                        } else {
                            var37 = 0.08621444;
                        }
                    } else {
                        if (input[1] < -0.4073582) {
                            var37 = -0.002325904;
                        } else {
                            var37 = 0.31005418;
                        }
                    }
                }
            } else {
                if (input[7] < 1.4711571) {
                    if (input[4] < -0.3856254) {
                        var37 = -0.51936215;
                    } else {
                        if (input[4] < -0.3840257) {
                            var37 = 0.6471543;
                        } else {
                            var37 = 0.0009894732;
                        }
                    }
                } else {
                    if (input[4] < -0.36248282) {
                        if (input[1] < -0.3917161) {
                            var37 = -0.092721894;
                        } else {
                            var37 = -0.4087545;
                        }
                    } else {
                        if (input[4] < -0.36049208) {
                            var37 = 0.51890206;
                        } else {
                            var37 = -0.03758809;
                        }
                    }
                }
            }
        }
    }
    var var38;
    if (input[1] < 0.028580708) {
        if (input[1] < -0.070712715) {
            if (input[1] < -0.12716034) {
                if (input[1] < -0.13600154) {
                    if (input[7] < 3.248952) {
                        if (input[4] < -0.29436153) {
                            var38 = -0.0027147972;
                        } else {
                            var38 = 0.0026703337;
                        }
                    } else {
                        if (input[1] < -0.41891977) {
                            var38 = -0.034964684;
                        } else {
                            var38 = 0.077451825;
                        }
                    }
                } else {
                    if (input[7] < 0.022583526) {
                        if (input[7] < -0.14663717) {
                            var38 = -0.05237164;
                        } else {
                            var38 = 0.082597144;
                        }
                    } else {
                        if (input[0] < -0.12691276) {
                            var38 = -0.30232304;
                        } else {
                            var38 = 0.010243196;
                        }
                    }
                }
            } else {
                if (input[3] < -0.14634857) {
                    if (input[7] < 2.2242022) {
                        if (input[7] < -0.7413768) {
                            var38 = -0.011621564;
                        } else {
                            var38 = 0.08279902;
                        }
                    } else {
                        var38 = 0.5295054;
                    }
                } else {
                    if (input[7] < 1.8906171) {
                        if (input[0] < -0.34536317) {
                            var38 = 0.18332599;
                        } else {
                            var38 = 0.0012760242;
                        }
                    } else {
                        if (input[6] < -0.5125253) {
                            var38 = -0.042424537;
                        } else {
                            var38 = -0.42506242;
                        }
                    }
                }
            }
        } else {
            if (input[3] < -0.14634857) {
                if (input[7] < -0.6151869) {
                    if (input[7] < -0.88380086) {
                        if (input[1] < 0.00817795) {
                            var38 = -0.0014716982;
                        } else {
                            var38 = -0.05180285;
                        }
                    } else {
                        if (input[1] < -0.0027035202) {
                            var38 = -0.065969564;
                        } else {
                            var38 = 0.058267094;
                        }
                    }
                } else {
                    if (input[2] < -0.20849527) {
                        if (input[2] < -0.23563433) {
                            var38 = -0.13744144;
                        } else {
                            var38 = 0.0014294983;
                        }
                    } else {
                        if (input[1] < -0.0380683) {
                            var38 = -0.07484487;
                        } else {
                            var38 = -0.20963684;
                        }
                    }
                }
            } else {
                if (input[4] < 0.05856272) {
                    if (input[7] < -0.19674025) {
                        if (input[4] < 0.037659746) {
                            var38 = -0.03111698;
                        } else {
                            var38 = 0.13770719;
                        }
                    } else {
                        if (input[7] < 0.534977) {
                            var38 = 0.22712962;
                        } else {
                            var38 = -0.03361258;
                        }
                    }
                } else {
                    if (input[7] < -0.43399307) {
                        if (input[3] < -0.07507915) {
                            var38 = 0.20794697;
                        } else {
                            var38 = -0.00032959055;
                        }
                    } else {
                        if (input[6] < -0.83312756) {
                            var38 = 0.14078695;
                        } else {
                            var38 = -0.1346931;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < 0.0462631) {
            if (input[6] < -0.38885298) {
                if (input[4] < -0.18630065) {
                    if (input[0] < -0.31805685) {
                        var38 = -0.09862325;
                    } else {
                        if (input[7] < -0.5640289) {
                            var38 = 0.05315956;
                        } else {
                            var38 = 0.22894865;
                        }
                    }
                } else {
                    if (input[0] < 0.10714126) {
                        if (input[2] < -0.25191775) {
                            var38 = -0.048195615;
                        } else {
                            var38 = -0.15400174;
                        }
                    } else {
                        if (input[0] < 0.42701507) {
                            var38 = 0.063023046;
                        } else {
                            var38 = -0.075704604;
                        }
                    }
                }
            } else {
                if (input[6] < 0.15280928) {
                    if (input[0] < -0.17372355) {
                        if (input[3] < -0.07507915) {
                            var38 = 0.14097627;
                        } else {
                            var38 = 0.7491404;
                        }
                    } else {
                        if (input[0] < 0.10714126) {
                            var38 = 0.19232552;
                        } else {
                            var38 = -0.13490151;
                        }
                    }
                } else {
                    if (input[4] < -0.022489617) {
                        if (input[0] < -0.34536317) {
                            var38 = -0.027251674;
                        } else {
                            var38 = -0.317423;
                        }
                    } else {
                        if (input[7] < -0.15476441) {
                            var38 = -0.05752271;
                        } else {
                            var38 = 0.54988474;
                        }
                    }
                }
            }
        } else {
            if (input[2] < -0.24648994) {
                if (input[4] < 0.04010295) {
                    if (input[7] < 0.6548189) {
                        if (input[0] < -0.34926406) {
                            var38 = 0.08765103;
                        } else {
                            var38 = -0.022464009;
                        }
                    } else {
                        if (input[7] < 1.4277248) {
                            var38 = -0.33124644;
                        } else {
                            var38 = -0.1159435;
                        }
                    }
                } else {
                    if (input[3] < 0.5170052) {
                        if (input[0] < -0.12691276) {
                            var38 = 0.34872907;
                        } else {
                            var38 = -0.040789068;
                        }
                    } else {
                        if (input[6] < 0.23365818) {
                            var38 = -0.018728353;
                        } else {
                            var38 = 0.073662095;
                        }
                    }
                }
            } else {
                if (input[4] < -0.12045629) {
                    if (input[7] < 0.35272354) {
                        if (input[6] < -0.8956929) {
                            var38 = 0.09521278;
                        } else {
                            var38 = -0.023271302;
                        }
                    } else {
                        if (input[7] < 0.47277445) {
                            var38 = 1.0712317;
                        } else {
                            var38 = 0.16259179;
                        }
                    }
                } else {
                    if (input[7] < 2.2086458) {
                        if (input[7] < 1.5143926) {
                            var38 = 0.003677149;
                        } else {
                            var38 = 0.26619834;
                        }
                    } else {
                        if (input[6] < 0.9187714) {
                            var38 = -0.28940442;
                        } else {
                            var38 = 0.018148972;
                        }
                    }
                }
            }
        }
    }
    var var39;
    if (input[7] < 1.9305356) {
        if (input[7] < 1.5143926) {
            if (input[4] < 0.6199568) {
                if (input[1] < 0.15779817) {
                    if (input[1] < 0.06530567) {
                        if (input[7] < 0.8062492) {
                            var39 = -0.0015884289;
                        } else {
                            var39 = 0.011255519;
                        }
                    } else {
                        if (input[6] < 0.17545679) {
                            var39 = 0.018593784;
                        } else {
                            var39 = 0.18088967;
                        }
                    }
                } else {
                    if (input[1] < 0.20812498) {
                        if (input[7] < -0.25253314) {
                            var39 = -0.0074451505;
                        } else {
                            var39 = -0.19474655;
                        }
                    } else {
                        if (input[6] < 2.1701546) {
                            var39 = -0.0042974395;
                        } else {
                            var39 = 0.41081578;
                        }
                    }
                }
            } else {
                if (input[0] < -0.34536317) {
                    if (input[4] < 0.6711477) {
                        var39 = 0.7509902;
                    } else {
                        if (input[1] < 0.4842423) {
                            var39 = -0.24636544;
                        } else {
                            var39 = 0.06639928;
                        }
                    }
                } else {
                    if (input[0] < -0.33756137) {
                        if (input[4] < 1.1574618) {
                            var39 = -0.24881148;
                        } else {
                            var39 = -0.01420016;
                        }
                    } else {
                        if (input[6] < 0.60563) {
                            var39 = 0.01502998;
                        } else {
                            var39 = -0.0145661235;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.3991971) {
                if (input[3] < -0.4314262) {
                    if (input[6] < -0.11035498) {
                        if (input[4] < -0.3811462) {
                            var39 = -0.29812247;
                        } else {
                            var39 = -0.07467962;
                        }
                    } else {
                        if (input[4] < -0.38637194) {
                            var39 = 0.027597927;
                        } else {
                            var39 = -0.106506236;
                        }
                    }
                } else {
                    if (input[4] < -0.3856254) {
                        if (input[0] < -0.34536317) {
                            var39 = -0.41360846;
                        } else {
                            var39 = 0.055200186;
                        }
                    } else {
                        if (input[1] < -0.40259758) {
                            var39 = 0.50282544;
                        } else {
                            var39 = 0.015898442;
                        }
                    }
                }
            } else {
                if (input[1] < -0.3726735) {
                    if (input[6] < -0.16797942) {
                        if (input[1] < -0.38491517) {
                            var39 = 0.24110653;
                        } else {
                            var39 = -0.19805337;
                        }
                    } else {
                        if (input[2] < -0.18135624) {
                            var39 = -0.28253263;
                        } else {
                            var39 = 0.43219903;
                        }
                    }
                } else {
                    if (input[1] < -0.3658726) {
                        if (input[4] < -0.36248282) {
                            var39 = -0.6036906;
                        } else {
                            var39 = 0.5364702;
                        }
                    } else {
                        if (input[1] < -0.3386689) {
                            var39 = -0.15432575;
                        } else {
                            var39 = 0.001635004;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.30499965) {
            if (input[4] < -0.3296353) {
                if (input[1] < -0.37811425) {
                    if (input[1] < -0.37947443) {
                        if (input[4] < -0.37442738) {
                            var39 = 0.002719303;
                        } else {
                            var39 = 0.108433455;
                        }
                    } else {
                        if (input[4] < -0.35427094) {
                            var39 = 0.94657797;
                        } else {
                            var39 = 0.0036709786;
                        }
                    }
                } else {
                    if (input[1] < -0.3237069) {
                        if (input[0] < -0.34536317) {
                            var39 = -0.20949444;
                        } else {
                            var39 = 0.042220395;
                        }
                    } else {
                        if (input[7] < 2.2242022) {
                            var39 = -0.32889217;
                        } else {
                            var39 = 0.46547103;
                        }
                    }
                }
            } else {
                if (input[7] < 2.2242022) {
                    if (input[1] < -0.3672328) {
                        var39 = -0.41131437;
                    } else {
                        if (input[3] < -0.31081644) {
                            var39 = 0.70113444;
                        } else {
                            var39 = -0.052552868;
                        }
                    }
                } else {
                    if (input[7] < 2.3132608) {
                        if (input[0] < -0.34926406) {
                            var39 = -0.6662666;
                        } else {
                            var39 = -0.19632404;
                        }
                    } else {
                        if (input[6] < 0.6409217) {
                            var39 = -0.2919513;
                        } else {
                            var39 = 0.099483766;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.2602076) {
                if (input[0] < -0.34536317) {
                    if (input[7] < 2.2086458) {
                        var39 = 0.99259496;
                    } else {
                        if (input[1] < -0.265219) {
                            var39 = 0.105498105;
                        } else {
                            var39 = 0.4238175;
                        }
                    }
                } else {
                    if (input[4] < -0.2714056) {
                        if (input[7] < 2.2242022) {
                            var39 = -0.3144669;
                        } else {
                            var39 = 0.012127149;
                        }
                    } else {
                        var39 = 0.6965374;
                    }
                }
            } else {
                if (input[4] < -0.24194619) {
                    if (input[7] < 2.2242022) {
                        if (input[1] < -0.11695896) {
                            var39 = -0.5785158;
                        } else {
                            var39 = -0.12445071;
                        }
                    } else {
                        if (input[4] < -0.25460857) {
                            var39 = -0.38899288;
                        } else {
                            var39 = 0.05359683;
                        }
                    }
                } else {
                    if (input[7] < 2.0969927) {
                        if (input[4] < 0.10753539) {
                            var39 = 0.43725082;
                        } else {
                            var39 = -0.12521923;
                        }
                    } else {
                        if (input[6] < -0.9479416) {
                            var39 = 0.18416941;
                        } else {
                            var39 = -0.016597899;
                        }
                    }
                }
            }
        }
    }
    var var40;
    if (input[7] < 8.876338) {
        if (input[6] < 2.1701546) {
            if (input[4] < -0.35927713) {
                if (input[3] < -0.31081644) {
                    if (input[4] < -0.36049208) {
                        if (input[6] < 1.4832127) {
                            var40 = 0.00057174143;
                        } else {
                            var40 = 0.1164892;
                        }
                    } else {
                        if (input[3] < -0.37112132) {
                            var40 = 0.26275408;
                        } else {
                            var40 = -0.09864336;
                        }
                    }
                } else {
                    if (input[7] < -0.7277347) {
                        var40 = -0.025132585;
                    } else {
                        if (input[6] < -0.11035498) {
                            var40 = 0.21294124;
                        } else {
                            var40 = 0.4976988;
                        }
                    }
                }
            } else {
                if (input[4] < -0.34979174) {
                    if (input[1] < -0.37811425) {
                        if (input[1] < -0.37947443) {
                            var40 = -0.018822877;
                        } else {
                            var40 = 0.2512173;
                        }
                    } else {
                        if (input[6] < -0.6382811) {
                            var40 = 0.013110452;
                        } else {
                            var40 = -0.10336909;
                        }
                    }
                } else {
                    if (input[1] < -0.38627535) {
                        if (input[6] < 0.45249978) {
                            var40 = -0.0008863587;
                        } else {
                            var40 = -0.07647459;
                        }
                    } else {
                        if (input[3] < -0.40949714) {
                            var40 = 0.41219926;
                        } else {
                            var40 = 0.0006701597;
                        }
                    }
                }
            }
        } else {
            if (input[2] < 0.16602354) {
                if (input[4] < 0.3699975) {
                    if (input[7] < -0.9061887) {
                        if (input[0] < -0.12691276) {
                            var40 = 0.025854278;
                        } else {
                            var40 = -0.039402083;
                        }
                    } else {
                        if (input[7] < 1.7161589) {
                            var40 = 0.08913516;
                        } else {
                            var40 = 0.0050323606;
                        }
                    }
                } else {
                    var40 = 0.56705195;
                }
            } else {
                if (input[5] < 0.89645296) {
                    if (input[1] < -0.01630536) {
                        var40 = -0.072160974;
                    } else {
                        var40 = -0.016514577;
                    }
                } else {
                    if (input[7] < -0.5640289) {
                        if (input[7] < -0.9061887) {
                            var40 = 0.004972982;
                        } else {
                            var40 = 0.030527448;
                        }
                    } else {
                        var40 = -0.051736545;
                    }
                }
            }
        }
    } else {
        var40 = 0.16505527;
    }
    var var41;
    if (input[7] < 1.9305356) {
        if (input[3] < -0.4670609) {
            if (input[6] < 0.37091032) {
                if (input[1] < -0.42844105) {
                    if (input[7] < -0.19674025) {
                        if (input[6] < -0.28669545) {
                            var41 = -0.11248043;
                        } else {
                            var41 = -0.024150772;
                        }
                    } else {
                        if (input[7] < 1.3185877) {
                            var41 = 0.03008964;
                        } else {
                            var41 = 0.12021114;
                        }
                    }
                } else {
                    if (input[7] < -0.10175492) {
                        var41 = -0.06530736;
                    } else {
                        var41 = -0.28068548;
                    }
                }
            } else {
                if (input[7] < -0.98284286) {
                    var41 = 0.048398692;
                } else {
                    if (input[6] < 0.87345564) {
                        if (input[6] < 0.39564443) {
                            var41 = -0.06340697;
                        } else {
                            var41 = -0.15009674;
                        }
                    } else {
                        var41 = 0.025218345;
                    }
                }
            }
        } else {
            if (input[4] < -0.40690163) {
                if (input[6] < -0.28669545) {
                    var41 = 0.7372906;
                } else {
                    if (input[6] < 0.37091032) {
                        if (input[6] < 0.066193745) {
                            var41 = -0.033806358;
                        } else {
                            var41 = -0.1587587;
                        }
                    } else {
                        if (input[6] < 0.5399172) {
                            var41 = 0.34603673;
                        } else {
                            var41 = -0.12387023;
                        }
                    }
                }
            } else {
                if (input[7] < 1.8294723) {
                    if (input[4] < -0.40226245) {
                        if (input[0] < -0.34926406) {
                            var41 = 0.11625653;
                        } else {
                            var41 = 0.0031373133;
                        }
                    } else {
                        if (input[1] < -0.42027995) {
                            var41 = -0.015648635;
                        } else {
                            var41 = 0.00035205053;
                        }
                    }
                } else {
                    if (input[4] < -0.30658054) {
                        if (input[1] < -0.3726735) {
                            var41 = -0.01754563;
                        } else {
                            var41 = 0.1993805;
                        }
                    } else {
                        if (input[4] < -0.25796798) {
                            var41 = -0.3310272;
                        } else {
                            var41 = 0.024870226;
                        }
                    }
                }
            }
        }
    } else {
        if (input[2] < -0.24648994) {
            if (input[3] < 0.24289207) {
                if (input[1] < -0.029907197) {
                    if (input[4] < -0.30499965) {
                        if (input[1] < -0.4100786) {
                            var41 = 0.011508172;
                        } else {
                            var41 = -0.06369955;
                        }
                    } else {
                        if (input[3] < -0.2559938) {
                            var41 = 0.34264126;
                        } else {
                            var41 = 0.013604629;
                        }
                    }
                } else {
                    if (input[7] < 2.8045325) {
                        if (input[4] < -0.06088283) {
                            var41 = -0.32249737;
                        } else {
                            var41 = -0.088020705;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var41 = -0.005186123;
                        } else {
                            var41 = 0.21326967;
                        }
                    }
                }
            } else {
                if (input[3] < 0.5170052) {
                    if (input[1] < 0.36182573) {
                        if (input[4] < -0.03400758) {
                            var41 = 0.112447;
                        } else {
                            var41 = 0.60789585;
                        }
                    } else {
                        var41 = -0.04660628;
                    }
                } else {
                    if (input[1] < 1.1194482) {
                        if (input[4] < 0.19741817) {
                            var41 = 0.05169423;
                        } else {
                            var41 = -0.14938915;
                        }
                    } else {
                        if (input[1] < 1.1942582) {
                            var41 = 0.5364438;
                        } else {
                            var41 = 0.11539604;
                        }
                    }
                }
            }
        } else {
            if (input[4] < 0.10753539) {
                if (input[6] < -0.04038927) {
                    if (input[4] < -0.35763034) {
                        if (input[1] < -0.41279894) {
                            var41 = 0.08084035;
                        } else {
                            var41 = -0.3372854;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var41 = -0.13373381;
                        } else {
                            var41 = 0.14264034;
                        }
                    }
                } else {
                    if (input[1] < -0.4257207) {
                        if (input[7] < 3.0238564) {
                            var41 = -0.052948054;
                        } else {
                            var41 = 0.35522005;
                        }
                    } else {
                        if (input[3] < -0.4588375) {
                            var41 = 0.5846624;
                        } else {
                            var41 = 0.061069276;
                        }
                    }
                }
            } else {
                if (input[7] < 3.0238564) {
                    if (input[4] < 1.055933) {
                        if (input[1] < 1.3357173) {
                            var41 = -0.3175596;
                        } else {
                            var41 = -0.11616268;
                        }
                    } else {
                        if (input[1] < 1.1194482) {
                            var41 = -0.06203027;
                        } else {
                            var41 = -0.015684485;
                        }
                    }
                } else {
                    if (input[0] < -0.26734516) {
                        var41 = 0.16138472;
                    } else {
                        var41 = -0.10656024;
                    }
                }
            }
        }
    }
    var var42;
    if (input[7] < 8.876338) {
        if (input[0] < 2.221429) {
            if (input[2] < 2.456559) {
                if (input[0] < 1.5972852) {
                    if (input[4] < 0.5691924) {
                        if (input[0] < 1.0511591) {
                            var42 = 0.000038343846;
                        } else {
                            var42 = -0.025356704;
                        }
                    } else {
                        if (input[7] < -0.6961423) {
                            var42 = -0.005556807;
                        } else {
                            var42 = 0.02364828;
                        }
                    }
                } else {
                    if (input[2] < 0.65452635) {
                        if (input[4] < 0.93350136) {
                            var42 = -0.034313574;
                        } else {
                            var42 = 0.039851923;
                        }
                    } else {
                        if (input[6] < -0.31931022) {
                            var42 = -0.013232109;
                        } else {
                            var42 = -0.20636128;
                        }
                    }
                }
            } else {
                if (input[1] < 0.28293508) {
                    if (input[7] < -0.6961423) {
                        if (input[7] < -0.98284286) {
                            var42 = 0.000029554369;
                        } else {
                            var42 = 0.2366052;
                        }
                    } else {
                        if (input[6] < -0.31931022) {
                            var42 = -0.06573797;
                        } else {
                            var42 = -0.23188294;
                        }
                    }
                } else {
                    if (input[6] < 0.15899417) {
                        var42 = -0.065141894;
                    } else {
                        var42 = 0.70262104;
                    }
                }
            }
        } else {
            if (input[1] < 0.5168867) {
                if (input[2] < -0.061944436) {
                    if (input[2] < -0.18135624) {
                        if (input[7] < -0.45574433) {
                            var42 = -0.07395284;
                        } else {
                            var42 = 0.17029701;
                        }
                    } else {
                        var42 = 0.6957546;
                    }
                } else {
                    if (input[7] < -0.45574433) {
                        if (input[7] < -0.6595239) {
                            var42 = 0.0101150125;
                        } else {
                            var42 = 0.13126044;
                        }
                    } else {
                        if (input[7] < -0.10175492) {
                            var42 = -0.047321487;
                        } else {
                            var42 = -0.107903674;
                        }
                    }
                }
            } else {
                if (input[3] < 1.7779255) {
                    if (input[7] < -0.6595239) {
                        if (input[2] < 0.82821625) {
                            var42 = -0.002249429;
                        } else {
                            var42 = 0.076518856;
                        }
                    } else {
                        if (input[1] < 1.3874043) {
                            var42 = -0.13732438;
                        } else {
                            var42 = -0.020615164;
                        }
                    }
                } else {
                    if (input[3] < 8.027704) {
                        if (input[6] < 0.07505404) {
                            var42 = 0.0021783288;
                        } else {
                            var42 = -0.03720067;
                        }
                    } else {
                        if (input[1] < 3.9649527) {
                            var42 = 0.002558976;
                        } else {
                            var42 = 0.1133349;
                        }
                    }
                }
            }
        }
    } else {
        var42 = 0.14985195;
    }
    var var43;
    if (input[7] < 8.876338) {
        if (input[7] < 2.4836273) {
            if (input[7] < 1.8915579) {
                if (input[3] < -0.4670609) {
                    if (input[6] < 0.37091032) {
                        if (input[1] < -0.42844105) {
                            var43 = 0.029958026;
                        } else {
                            var43 = -0.15848438;
                        }
                    } else {
                        if (input[7] < -0.98284286) {
                            var43 = 0.041133143;
                        } else {
                            var43 = -0.092249885;
                        }
                    }
                } else {
                    if (input[4] < -0.40690163) {
                        if (input[6] < -0.28669545) {
                            var43 = 0.6266913;
                        } else {
                            var43 = 0.024097074;
                        }
                    } else {
                        if (input[7] < 1.8501443) {
                            var43 = -0.00005878918;
                        } else {
                            var43 = -0.02599422;
                        }
                    }
                }
            } else {
                if (input[6] < 1.2632518) {
                    if (input[1] < -0.26249865) {
                        if (input[1] < -0.2992236) {
                            var43 = 0.011532536;
                        } else {
                            var43 = -0.1652896;
                        }
                    } else {
                        if (input[1] < -0.24481624) {
                            var43 = 0.43149844;
                        } else {
                            var43 = 0.0026434837;
                        }
                    }
                } else {
                    if (input[4] < 0.06453499) {
                        var43 = 0.54418606;
                    } else {
                        var43 = -0.124861516;
                    }
                }
            }
        } else {
            if (input[4] < -0.40130264) {
                if (input[6] < 0.25509757) {
                    if (input[1] < -0.42844105) {
                        if (input[6] < -0.33531734) {
                            var43 = -0.17790657;
                        } else {
                            var43 = 0.09530268;
                        }
                    } else {
                        if (input[1] < -0.4257207) {
                            var43 = -0.12397886;
                        } else {
                            var43 = -0.29545736;
                        }
                    }
                } else {
                    if (input[6] < 0.46406695) {
                        if (input[5] < 0.89645296) {
                            var43 = -0.029770875;
                        } else {
                            var43 = 0.28371853;
                        }
                    } else {
                        if (input[6] < 1.1517857) {
                            var43 = -0.13665618;
                        } else {
                            var43 = -0.0008101464;
                        }
                    }
                }
            } else {
                if (input[1] < -0.42232025) {
                    if (input[6] < 0.097515695) {
                        var43 = 0.46428493;
                    } else {
                        if (input[5] < 0.89645296) {
                            var43 = 0.41190678;
                        } else {
                            var43 = 0.004738303;
                        }
                    }
                } else {
                    if (input[1] < -0.4175596) {
                        if (input[4] < -0.40018284) {
                            var43 = 0.048858576;
                        } else {
                            var43 = -0.22814491;
                        }
                    } else {
                        if (input[6] < 0.48636204) {
                            var43 = 0.024997558;
                        } else {
                            var43 = -0.02774542;
                        }
                    }
                }
            }
        }
    } else {
        var43 = 0.12737417;
    }
    var var44;
    if (input[1] < 0.4679201) {
        if (input[1] < 0.28293508) {
            if (input[3] < 0.9007636) {
                if (input[4] < -0.022489617) {
                    if (input[4] < -0.05938976) {
                        if (input[1] < -0.0027035202) {
                            var44 = -0.00064432103;
                        } else {
                            var44 = 0.026087973;
                        }
                    } else {
                        if (input[0] < -0.17372355) {
                            var44 = 0.1349442;
                        } else {
                            var44 = 0.0039504743;
                        }
                    }
                } else {
                    if (input[7] < -0.10175492) {
                        if (input[0] < -0.26734516) {
                            var44 = 0.08862629;
                        } else {
                            var44 = -0.0016973254;
                        }
                    } else {
                        if (input[6] < 0.28938338) {
                            var44 = -0.09423104;
                        } else {
                            var44 = 0.003036835;
                        }
                    }
                }
            } else {
                if (input[7] < -0.6595239) {
                    if (input[6] < -0.31931022) {
                        if (input[6] < -0.42728758) {
                            var44 = 0.0228204;
                        } else {
                            var44 = -0.05683742;
                        }
                    } else {
                        var44 = 0.18819408;
                    }
                } else {
                    if (input[0] < -0.26734516) {
                        var44 = -0.31209305;
                    } else {
                        var44 = -0.17064223;
                    }
                }
            }
        } else {
            if (input[4] < 0.88870925) {
                if (input[6] < 2.1701546) {
                    if (input[6] < 0.18851979) {
                        if (input[6] < 0.15899417) {
                            var44 = 0.009412254;
                        } else {
                            var44 = 0.53453237;
                        }
                    } else {
                        if (input[0] < 0.10714126) {
                            var44 = -0.18609309;
                        } else {
                            var44 = 0.03839193;
                        }
                    }
                } else {
                    var44 = 0.4819444;
                }
            } else {
                if (input[7] < -0.7464926) {
                    if (input[2] < 0.65452635) {
                        if (input[6] < -0.49229905) {
                            var44 = -0.02313807;
                        } else {
                            var44 = -0.06742427;
                        }
                    } else {
                        if (input[7] < -0.78776014) {
                            var44 = -0.036166355;
                        } else {
                            var44 = 0.04381564;
                        }
                    }
                } else {
                    if (input[0] < 0.10714126) {
                        var44 = -0.02121985;
                    } else {
                        if (input[7] < 0.0038255705) {
                            var44 = 0.38408524;
                        } else {
                            var44 = 0.8577482;
                        }
                    }
                }
            }
        }
    } else {
        if (input[6] < 0.19602472) {
            if (input[6] < -0.013384028) {
                if (input[1] < 0.63658285) {
                    if (input[3] < 0.3525373) {
                        if (input[7] < -0.04562722) {
                            var44 = -0.055932447;
                        } else {
                            var44 = -0.385104;
                        }
                    } else {
                        if (input[7] < 1.1771548) {
                            var44 = -0.025248079;
                        } else {
                            var44 = 0.23610482;
                        }
                    }
                } else {
                    if (input[4] < -0.13702936) {
                        if (input[6] < -0.7021178) {
                            var44 = 0.0073021217;
                        } else {
                            var44 = 0.3168866;
                        }
                    } else {
                        if (input[4] < -0.011611541) {
                            var44 = -0.038360305;
                        } else {
                            var44 = 0.003910951;
                        }
                    }
                }
            } else {
                if (input[4] < 1.1574618) {
                    if (input[4] < 0.40196866) {
                        if (input[4] < 0.29745382) {
                            var44 = -0.13132107;
                        } else {
                            var44 = 0.2338418;
                        }
                    } else {
                        if (input[3] < 0.5170052) {
                            var44 = 0.17975971;
                        } else {
                            var44 = -0.200424;
                        }
                    }
                } else {
                    if (input[7] < 0.084374435) {
                        if (input[0] < -0.17372355) {
                            var44 = -0.18123925;
                        } else {
                            var44 = 0.001579949;
                        }
                    } else {
                        if (input[6] < 0.066193745) {
                            var44 = -0.011428285;
                        } else {
                            var44 = 0.56164515;
                        }
                    }
                }
            }
        } else {
            if (input[6] < 0.20030792) {
                if (input[0] < -0.17372355) {
                    var44 = 0.821275;
                } else {
                    var44 = 0.006267876;
                }
            } else {
                if (input[3] < 0.24289207) {
                    if (input[7] < -0.7464926) {
                        if (input[3] < 0.16065814) {
                            var44 = 0.11359442;
                        } else {
                            var44 = -0.042398185;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var44 = -0.10854648;
                        } else {
                            var44 = -0.29928833;
                        }
                    }
                } else {
                    if (input[4] < 0.6711477) {
                        if (input[4] < 0.6199568) {
                            var44 = 0.033908695;
                        } else {
                            var44 = 0.95727026;
                        }
                    } else {
                        if (input[3] < 1.3393445) {
                            var44 = -0.10958064;
                        } else {
                            var44 = 0.012562332;
                        }
                    }
                }
            }
        }
    }
    var var45;
    if (input[1] < -0.27542037) {
        if (input[1] < -0.28426158) {
            if (input[1] < -0.28834212) {
                if (input[1] < -0.33186802) {
                    if (input[1] < -0.3332282) {
                        if (input[0] < -0.29855236) {
                            var45 = 0.004863931;
                        } else {
                            var45 = -0.0062889163;
                        }
                    } else {
                        if (input[7] < -0.6956822) {
                            var45 = -0.032359723;
                        } else {
                            var45 = -0.5418337;
                        }
                    }
                } else {
                    if (input[6] < 0.7535138) {
                        if (input[6] < 0.37091032) {
                            var45 = 0.011365462;
                        } else {
                            var45 = 0.09608827;
                        }
                    } else {
                        if (input[2] < -0.13793376) {
                            var45 = -0.13689028;
                        } else {
                            var45 = -0.0001904238;
                        }
                    }
                }
            } else {
                if (input[7] < 0.122625954) {
                    if (input[0] < -0.29855236) {
                        if (input[7] < -0.6956822) {
                            var45 = -0.048719347;
                        } else {
                            var45 = -0.18799073;
                        }
                    } else {
                        if (input[7] < -0.43399307) {
                            var45 = -0.08178689;
                        } else {
                            var45 = 0.07112815;
                        }
                    }
                } else {
                    if (input[6] < 0.41206968) {
                        if (input[2] < -0.25191775) {
                            var45 = -0.18238187;
                        } else {
                            var45 = 0.24093822;
                        }
                    } else {
                        var45 = -0.20601854;
                    }
                }
            }
        } else {
            if (input[7] < 0.90629166) {
                if (input[7] < -0.0074292026) {
                    if (input[7] < -0.10175492) {
                        if (input[4] < -0.29021826) {
                            var45 = 0.103621505;
                        } else {
                            var45 = -0.04323568;
                        }
                    } else {
                        if (input[6] < -0.38885298) {
                            var45 = 1.1619698;
                        } else {
                            var45 = 0.072695926;
                        }
                    }
                } else {
                    if (input[4] < -0.2863363) {
                        if (input[6] < -0.69031477) {
                            var45 = -0.04668124;
                        } else {
                            var45 = -0.28084004;
                        }
                    } else {
                        if (input[4] < -0.24453035) {
                            var45 = 0.11917271;
                        } else {
                            var45 = -0.17920302;
                        }
                    }
                }
            } else {
                if (input[7] < 1.8294723) {
                    var45 = 0.73811245;
                } else {
                    if (input[6] < 0.23643003) {
                        if (input[4] < -0.28185707) {
                            var45 = -0.24785304;
                        } else {
                            var45 = 0.24997546;
                        }
                    } else {
                        var45 = 0.44815865;
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.265219) {
            if (input[7] < 0.17264716) {
                if (input[7] < 0.16795768) {
                    if (input[7] < -0.10175492) {
                        if (input[7] < -0.2175183) {
                            var45 = -0.012409655;
                        } else {
                            var45 = 0.27332562;
                        }
                    } else {
                        if (input[3] < -0.19568892) {
                            var45 = -0.020585893;
                        } else {
                            var45 = -0.22047585;
                        }
                    }
                } else {
                    if (input[4] < -0.27812442) {
                        var45 = 0.7553956;
                    } else {
                        var45 = 0.05987418;
                    }
                }
            } else {
                if (input[4] < -0.2758848) {
                    if (input[6] < 0.7829106) {
                        if (input[7] < 1.3185877) {
                            var45 = -0.2411772;
                        } else {
                            var45 = -0.52080184;
                        }
                    } else {
                        if (input[1] < -0.26997966) {
                            var45 = -0.20659783;
                        } else {
                            var45 = 0.24986461;
                        }
                    }
                } else {
                    if (input[0] < -0.34926406) {
                        if (input[1] < -0.26997966) {
                            var45 = 0.7166811;
                        } else {
                            var45 = -0.024733258;
                        }
                    } else {
                        if (input[6] < 0.18104404) {
                            var45 = -0.047532894;
                        } else {
                            var45 = -0.2314605;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.18630065) {
                if (input[2] < -0.007666345) {
                    if (input[2] < -0.20849527) {
                        if (input[7] < 1.1330545) {
                            var45 = -0.012359707;
                        } else {
                            var45 = 0.049496092;
                        }
                    } else {
                        if (input[7] < 0.81429857) {
                            var45 = -0.019581191;
                        } else {
                            var45 = -0.2906151;
                        }
                    }
                } else {
                    var45 = 0.70971924;
                }
            } else {
                if (input[4] < -0.1549462) {
                    if (input[2] < -0.061944436) {
                        if (input[7] < -0.052448295) {
                            var45 = -0.03328576;
                        } else {
                            var45 = 0.1381988;
                        }
                    } else {
                        if (input[7] < -0.45000497) {
                            var45 = -0.08232459;
                        } else {
                            var45 = 0.9360814;
                        }
                    }
                } else {
                    if (input[3] < -0.2559938) {
                        var45 = -0.20036818;
                    } else {
                        if (input[1] < -0.26249865) {
                            var45 = 0.07129562;
                        } else {
                            var45 = 0.0004946703;
                        }
                    }
                }
            }
        }
    }
    var var46;
    if (input[6] < 1.9575151) {
        if (input[6] < -1.0831373) {
            if (input[7] < 1.7161589) {
                if (input[3] < -0.40949714) {
                    if (input[7] < 0.19140512) {
                        if (input[7] < -0.10175492) {
                            var46 = -0.015213772;
                        } else {
                            var46 = 0.14757515;
                        }
                    } else {
                        if (input[1] < -0.4175596) {
                            var46 = -0.2821615;
                        } else {
                            var46 = -0.07186273;
                        }
                    }
                } else {
                    if (input[1] < -0.36859298) {
                        if (input[6] < -1.2959688) {
                            var46 = 0.1404741;
                        } else {
                            var46 = -0.041391723;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var46 = 0.015767857;
                        } else {
                            var46 = -0.006659599;
                        }
                    }
                }
            } else {
                if (input[1] < -0.38627535) {
                    if (input[0] < -0.31805685) {
                        var46 = -0.07190822;
                    } else {
                        var46 = 0.60386676;
                    }
                } else {
                    if (input[7] < 1.8906171) {
                        if (input[2] < -0.24648994) {
                            var46 = -0.082771175;
                        } else {
                            var46 = -0.5135755;
                        }
                    } else {
                        if (input[4] < -0.12045629) {
                            var46 = -0.20525734;
                        } else {
                            var46 = 0.28683254;
                        }
                    }
                }
            }
        } else {
            if (input[6] < -1.021536) {
                if (input[1] < -0.34819022) {
                    if (input[1] < -0.37811425) {
                        if (input[1] < -0.42232025) {
                            var46 = -0.19601184;
                        } else {
                            var46 = -0.029237675;
                        }
                    } else {
                        if (input[7] < -0.5094603) {
                            var46 = 0.08496006;
                        } else {
                            var46 = 0.8461931;
                        }
                    }
                } else {
                    if (input[7] < 0.19140512) {
                        if (input[6] < -1.0476673) {
                            var46 = -0.0032816452;
                        } else {
                            var46 = -0.078794256;
                        }
                    } else {
                        if (input[3] < 0.24289207) {
                            var46 = -0.37043184;
                        } else {
                            var46 = 0.03740991;
                        }
                    }
                }
            } else {
                if (input[5] < 0.89645296) {
                    if (input[6] < 0.62617546) {
                        if (input[4] < 0.88870925) {
                            var46 = -0.0014752263;
                        } else {
                            var46 = 0.026452988;
                        }
                    } else {
                        if (input[6] < 0.9187714) {
                            var46 = 0.043286607;
                        } else {
                            var46 = -0.03186428;
                        }
                    }
                } else {
                    if (input[6] < -0.15998022) {
                        if (input[3] < 1.3393445) {
                            var46 = 0.008254543;
                        } else {
                            var46 = -0.06073073;
                        }
                    } else {
                        if (input[1] < -0.32914764) {
                            var46 = -0.009830668;
                        } else {
                            var46 = 0.0029407018;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.42844105) {
            var46 = -0.29893532;
        } else {
            if (input[7] < 0.3372331) {
                if (input[4] < -0.2176551) {
                    if (input[1] < -0.15776448) {
                        if (input[4] < -0.24453035) {
                            var46 = 0.019881688;
                        } else {
                            var46 = 0.10643405;
                        }
                    } else {
                        var46 = 0.2655822;
                    }
                } else {
                    if (input[2] < -0.18135624) {
                        if (input[7] < -0.9421113) {
                            var46 = 0.010145308;
                        } else {
                            var46 = -0.14907743;
                        }
                    } else {
                        if (input[2] < -0.007666345) {
                            var46 = 0.07834973;
                        } else {
                            var46 = 0.003473092;
                        }
                    }
                }
            } else {
                if (input[1] < -0.4257207) {
                    if (input[6] < 2.1701546) {
                        var46 = -0.18221366;
                    } else {
                        if (input[0] < -0.34536317) {
                            var46 = 0.034757808;
                        } else {
                            var46 = -0.042230487;
                        }
                    }
                } else {
                    if (input[7] < 0.5512693) {
                        var46 = 0.48035803;
                    } else {
                        var46 = 0.15438786;
                    }
                }
            }
        }
    }
    var var47;
    if (input[7] < 1.8915579) {
        if (input[6] < 1.9575151) {
            if (input[6] < 0.57522696) {
                if (input[3] < -0.4588375) {
                    if (input[7] < 0.47277445) {
                        if (input[1] < -0.42027995) {
                            var47 = -0.022728104;
                        } else {
                            var47 = 0.43222168;
                        }
                    } else {
                        if (input[7] < 1.4711571) {
                            var47 = 0.06897019;
                        } else {
                            var47 = -0.022036992;
                        }
                    }
                } else {
                    if (input[4] < -0.38637194) {
                        if (input[7] < 1.8294723) {
                            var47 = -0.011497172;
                        } else {
                            var47 = -0.25143516;
                        }
                    } else {
                        if (input[4] < -0.3856254) {
                            var47 = 0.110705994;
                        } else {
                            var47 = 0.00038516;
                        }
                    }
                }
            } else {
                if (input[4] < -0.35763034) {
                    if (input[4] < -0.36591688) {
                        if (input[1] < -0.38967583) {
                            var47 = 0.003132337;
                        } else {
                            var47 = -0.20462255;
                        }
                    } else {
                        if (input[4] < -0.36049208) {
                            var47 = 0.7046327;
                        } else {
                            var47 = 0.026380507;
                        }
                    }
                } else {
                    if (input[7] < 1.7161589) {
                        if (input[4] < -0.35576403) {
                            var47 = -0.39731994;
                        } else {
                            var47 = -0.0103489645;
                        }
                    } else {
                        if (input[3] < -0.34371) {
                            var47 = 0.20372206;
                        } else {
                            var47 = -0.21349417;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 0.3372331) {
                if (input[4] < -0.2176551) {
                    if (input[1] < -0.2223732) {
                        if (input[3] < -0.31081644) {
                            var47 = 0.023028815;
                        } else {
                            var47 = -0.091800064;
                        }
                    } else {
                        if (input[0] < -0.12691276) {
                            var47 = 0.08946311;
                        } else {
                            var47 = 0.24984781;
                        }
                    }
                } else {
                    if (input[1] < 0.36182573) {
                        if (input[3] < 0.3525373) {
                            var47 = 0.0022202781;
                        } else {
                            var47 = 0.111900575;
                        }
                    } else {
                        if (input[1] < 2.0158093) {
                            var47 = -0.069864675;
                        } else {
                            var47 = 0.021159068;
                        }
                    }
                }
            } else {
                if (input[1] < -0.42776096) {
                    var47 = -0.15488163;
                } else {
                    if (input[0] < -0.34536317) {
                        var47 = 0.40830433;
                    } else {
                        var47 = 0.09131444;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.40354225) {
            if (input[1] < -0.4257207) {
                if (input[7] < 2.2086458) {
                    if (input[3] < -0.4670609) {
                        if (input[1] < -0.42844105) {
                            var47 = 0.0076909307;
                        } else {
                            var47 = -0.05438948;
                        }
                    } else {
                        if (input[1] < -0.42708087) {
                            var47 = -0.4099172;
                        } else {
                            var47 = -0.014991289;
                        }
                    }
                } else {
                    if (input[6] < 0.6409217) {
                        if (input[1] < -0.42708087) {
                            var47 = -0.022929048;
                        } else {
                            var47 = -0.11614011;
                        }
                    } else {
                        if (input[7] < 2.3104768) {
                            var47 = 0.3466434;
                        } else {
                            var47 = 0.016561285;
                        }
                    }
                }
            } else {
                if (input[6] < 0.832688) {
                    if (input[7] < 2.0969927) {
                        if (input[2] < -0.25191775) {
                            var47 = -0.068829976;
                        } else {
                            var47 = 0.00491972;
                        }
                    } else {
                        if (input[1] < -0.42232025) {
                            var47 = -0.31672657;
                        } else {
                            var47 = 0.10522621;
                        }
                    }
                } else {
                    var47 = 0.16361597;
                }
            }
        } else {
            if (input[1] < -0.41143876) {
                if (input[3] < -0.44513187) {
                    if (input[1] < -0.41891977) {
                        if (input[6] < 0.78198916) {
                            var47 = -0.009670988;
                        } else {
                            var47 = 0.1351296;
                        }
                    } else {
                        if (input[6] < 0.5132408) {
                            var47 = -0.0080251265;
                        } else {
                            var47 = -0.3631093;
                        }
                    }
                } else {
                    if (input[4] < -0.39458382) {
                        if (input[6] < 0.78198916) {
                            var47 = -0.000440712;
                        } else {
                            var47 = 1.1885428;
                        }
                    } else {
                        if (input[6] < 0.832688) {
                            var47 = 0.11940107;
                        } else {
                            var47 = -0.2107099;
                        }
                    }
                }
            } else {
                if (input[1] < -0.4080383) {
                    if (input[7] < 2.3104768) {
                        if (input[4] < -0.39383727) {
                            var47 = 0.17397812;
                        } else {
                            var47 = -0.31111065;
                        }
                    } else {
                        if (input[7] < 2.3132608) {
                            var47 = 0.31885242;
                        } else {
                            var47 = -0.06486215;
                        }
                    }
                } else {
                    if (input[1] < -0.398517) {
                        if (input[3] < -0.4314262) {
                            var47 = -0.019254813;
                        } else {
                            var47 = 0.2843285;
                        }
                    } else {
                        if (input[1] < -0.39715683) {
                            var47 = -0.24894698;
                        } else {
                            var47 = 0.0022930729;
                        }
                    }
                }
            }
        }
    }
    var var48;
    if (input[7] < 3.0238564) {
        if (input[7] < 2.4836273) {
            if (input[7] < 1.8906171) {
                if (input[3] < -0.4670609) {
                    if (input[7] < 0.29901654) {
                        if (input[6] < -0.2619518) {
                            var48 = -0.07354141;
                        } else {
                            var48 = 0.00863113;
                        }
                    } else {
                        if (input[7] < 1.061024) {
                            var48 = -0.15098149;
                        } else {
                            var48 = -0.049923267;
                        }
                    }
                } else {
                    if (input[4] < -0.40690163) {
                        if (input[6] < -0.28669545) {
                            var48 = 0.5342257;
                        } else {
                            var48 = 0.025680656;
                        }
                    } else {
                        if (input[3] < -0.34371) {
                            var48 = 0.0021532218;
                        } else {
                            var48 = -0.0016287216;
                        }
                    }
                }
            } else {
                if (input[1] < -0.32914764) {
                    if (input[4] < -0.2758848) {
                        if (input[4] < -0.3684551) {
                            var48 = 0.011295689;
                        } else {
                            var48 = -0.05084721;
                        }
                    } else {
                        var48 = -0.4361463;
                    }
                } else {
                    if (input[3] < -0.31081644) {
                        if (input[7] < 1.9305356) {
                            var48 = 1.0213865;
                        } else {
                            var48 = 0.15917371;
                        }
                    } else {
                        if (input[4] < -0.30011326) {
                            var48 = -0.31400385;
                        } else {
                            var48 = 0.036625296;
                        }
                    }
                }
            }
        } else {
            if (input[0] < -0.34926406) {
                if (input[1] < -0.42844105) {
                    var48 = -0.2565792;
                } else {
                    if (input[6] < 0.57522696) {
                        var48 = -0.1682839;
                    } else {
                        var48 = 0.08206008;
                    }
                }
            } else {
                if (input[3] < 2.9292006) {
                    if (input[1] < -0.31418562) {
                        if (input[1] < -0.35499114) {
                            var48 = -0.032393508;
                        } else {
                            var48 = 0.31196153;
                        }
                    } else {
                        if (input[1] < -0.23257458) {
                            var48 = -0.27689382;
                        } else {
                            var48 = -0.0045718946;
                        }
                    }
                } else {
                    if (input[1] < 1.473776) {
                        var48 = 0.20555559;
                    } else {
                        if (input[0] < -0.34536317) {
                            var48 = 0.034809496;
                        } else {
                            var48 = -0.012523842;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.22577366) {
            if (input[1] < -0.30194396) {
                if (input[1] < -0.34683004) {
                    if (input[6] < 0.46406695) {
                        if (input[1] < -0.4168795) {
                            var48 = -0.015044547;
                        } else {
                            var48 = 0.12049534;
                        }
                    } else {
                        if (input[6] < 1.0982811) {
                            var48 = -0.090377286;
                        } else {
                            var48 = 0.0531285;
                        }
                    }
                } else {
                    if (input[4] < -0.31171846) {
                        var48 = -0.25950122;
                    } else {
                        if (input[3] < -0.31081644) {
                            var48 = 0.117044024;
                        } else {
                            var48 = -0.07047984;
                        }
                    }
                }
            } else {
                if (input[6] < 0.48636204) {
                    if (input[0] < -0.34536317) {
                        if (input[0] < -0.34926406) {
                            var48 = -0.0018370629;
                        } else {
                            var48 = 0.007605243;
                        }
                    } else {
                        var48 = 0.10081773;
                    }
                } else {
                    if (input[1] < -0.250257) {
                        var48 = 0.26627502;
                    } else {
                        var48 = 0.061279252;
                    }
                }
            }
        } else {
            if (input[4] < 0.3545637) {
                if (input[3] < 0.16065814) {
                    if (input[4] < -0.12045629) {
                        if (input[5] < 0.89645296) {
                            var48 = -0.023211766;
                        } else {
                            var48 = -0.16581263;
                        }
                    } else {
                        var48 = 0.12859955;
                    }
                } else {
                    var48 = -0.17998165;
                }
            } else {
                if (input[0] < -0.34926406) {
                    var48 = -0.09421755;
                } else {
                    if (input[0] < -0.34536317) {
                        var48 = 0.036597207;
                    } else {
                        var48 = 0.13932706;
                    }
                }
            }
        }
    }
    var var49;
    if (input[4] < 0.04010295) {
        if (input[4] < -0.022489617) {
            if (input[3] < 0.5170052) {
                if (input[4] < -0.05938976) {
                    if (input[1] < 0.30197766) {
                        if (input[3] < 0.24289207) {
                            var49 = 0.00015086915;
                        } else {
                            var49 = 0.15198871;
                        }
                    } else {
                        if (input[7] < -0.36236233) {
                            var49 = 0.008095074;
                        } else {
                            var49 = -0.08236776;
                        }
                    }
                } else {
                    if (input[0] < -0.17372355) {
                        if (input[2] < -0.13793376) {
                            var49 = 0.051452134;
                        } else {
                            var49 = 0.32247624;
                        }
                    } else {
                        if (input[1] < -0.20401073) {
                            var49 = 0.12523225;
                        } else {
                            var49 = -0.034551032;
                        }
                    }
                }
            } else {
                if (input[6] < 0.3436074) {
                    if (input[7] < -0.24002784) {
                        if (input[6] < -1.6299307) {
                            var49 = 0.07736281;
                        } else {
                            var49 = -0.024080228;
                        }
                    } else {
                        if (input[1] < 0.9303826) {
                            var49 = -0.17412172;
                        } else {
                            var49 = -0.00014982621;
                        }
                    }
                } else {
                    var49 = -0.43989092;
                }
            }
        } else {
            if (input[7] < 0.35272354) {
                if (input[7] < -0.24002784) {
                    if (input[7] < -0.35257557) {
                        if (input[2] < -0.24648994) {
                            var49 = 0.040224615;
                        } else {
                            var49 = -0.022504378;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var49 = -0.13682881;
                        } else {
                            var49 = -0.25273705;
                        }
                    }
                } else {
                    if (input[6] < -1.1579646) {
                        if (input[5] < 0.89645296) {
                            var49 = 0.10844002;
                        } else {
                            var49 = 0.65441227;
                        }
                    } else {
                        if (input[4] < -0.011611541) {
                            var49 = -0.16687089;
                        } else {
                            var49 = 0.048554692;
                        }
                    }
                }
            } else {
                if (input[0] < -0.34536317) {
                    if (input[6] < 0.23643003) {
                        if (input[4] < 0.037659746) {
                            var49 = 0.18015543;
                        } else {
                            var49 = -0.48164743;
                        }
                    } else {
                        if (input[6] < 0.6680634) {
                            var49 = 0.11840873;
                        } else {
                            var49 = 0.48845202;
                        }
                    }
                } else {
                    if (input[3] < 0.5170052) {
                        if (input[3] < 0.0784242) {
                            var49 = -0.11202888;
                        } else {
                            var49 = -0.3449818;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var49 = -0.055019516;
                        } else {
                            var49 = 0.18752193;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.13620232) {
            if (input[7] < -0.32041907) {
                if (input[7] < -0.45000497) {
                    if (input[7] < -0.6595239) {
                        if (input[1] < 0.3237406) {
                            var49 = 0.017779352;
                        } else {
                            var49 = -0.05605478;
                        }
                    } else {
                        if (input[4] < 0.06453499) {
                            var49 = 0.25725934;
                        } else {
                            var49 = 0.025398964;
                        }
                    }
                } else {
                    if (input[1] < -0.12716034) {
                        if (input[7] < -0.3922983) {
                            var49 = -0.04299401;
                        } else {
                            var49 = 0.089696184;
                        }
                    } else {
                        if (input[6] < -0.76093256) {
                            var49 = -0.044121854;
                        } else {
                            var49 = -0.22195102;
                        }
                    }
                }
            } else {
                if (input[7] < -0.30755648) {
                    var49 = 1.5170755;
                } else {
                    if (input[3] < 0.3525373) {
                        if (input[7] < 0.022583526) {
                            var49 = 0.08207829;
                        } else {
                            var49 = -0.13112648;
                        }
                    } else {
                        if (input[2] < -0.20849527) {
                            var49 = 0.12262073;
                        } else {
                            var49 = 0.46852458;
                        }
                    }
                }
            }
        } else {
            if (input[7] < -0.0074292026) {
                if (input[7] < -0.052448295) {
                    if (input[3] < 0.0784242) {
                        if (input[1] < 0.07890751) {
                            var49 = -0.017393615;
                        } else {
                            var49 = -0.18486118;
                        }
                    } else {
                        if (input[0] < 0.42701507) {
                            var49 = 0.018725878;
                        } else {
                            var49 = -0.0019932718;
                        }
                    }
                } else {
                    if (input[4] < 0.34224588) {
                        if (input[4] < 0.19741817) {
                            var49 = -0.044780143;
                        } else {
                            var49 = 0.54852086;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var49 = 0.4923407;
                        } else {
                            var49 = -0.032290563;
                        }
                    }
                }
            } else {
                if (input[4] < 0.34224588) {
                    if (input[7] < 1.7161589) {
                        if (input[1] < 0.1387556) {
                            var49 = 0.11150418;
                        } else {
                            var49 = -0.12294086;
                        }
                    } else {
                        if (input[7] < 1.8501443) {
                            var49 = -0.5081839;
                        } else {
                            var49 = -0.17398237;
                        }
                    }
                } else {
                    if (input[7] < 0.0011458626) {
                        var49 = -0.2923427;
                    } else {
                        if (input[1] < 1.9341983) {
                            var49 = 0.033514913;
                        } else {
                            var49 = -0.07829483;
                        }
                    }
                }
            }
        }
    }
    var var50;
    if (input[6] < 0.807752) {
        if (input[6] < 0.78802186) {
            if (input[3] < -0.46431977) {
                if (input[7] < -0.19674025) {
                    if (input[7] < -0.63063467) {
                        if (input[5] < 0.89645296) {
                            var50 = 0.060712285;
                        } else {
                            var50 = -0.055987153;
                        }
                    } else {
                        if (input[3] < -0.4670609) {
                            var50 = -0.04645492;
                        } else {
                            var50 = 0.08409497;
                        }
                    }
                } else {
                    if (input[1] < -0.42776096) {
                        if (input[6] < -0.36445907) {
                            var50 = 0.12714873;
                        } else {
                            var50 = -0.011367395;
                        }
                    } else {
                        if (input[6] < -0.013384028) {
                            var50 = 0.009278539;
                        } else {
                            var50 = -0.076180935;
                        }
                    }
                }
            } else {
                if (input[3] < -0.4588375) {
                    if (input[0] < -0.34536317) {
                        if (input[1] < -0.4243605) {
                            var50 = 0.24884619;
                        } else {
                            var50 = -0.052560642;
                        }
                    } else {
                        if (input[1] < -0.42027995) {
                            var50 = -0.0025944016;
                        } else {
                            var50 = 0.36592975;
                        }
                    }
                } else {
                    if (input[4] < -0.40018284) {
                        if (input[6] < 0.03295901) {
                            var50 = 0.042273007;
                        } else {
                            var50 = -0.11150678;
                        }
                    } else {
                        if (input[6] < 0.7535138) {
                            var50 = -0.00090644846;
                        } else {
                            var50 = 0.03658673;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.35203135) {
                if (input[3] < -0.44513187) {
                    if (input[1] < -0.42708087) {
                        if (input[1] < -0.42844105) {
                            var50 = -0.07751619;
                        } else {
                            var50 = 0.2495598;
                        }
                    } else {
                        if (input[3] < -0.4588375) {
                            var50 = -0.3718143;
                        } else {
                            var50 = 0.032048263;
                        }
                    }
                } else {
                    if (input[2] < -0.23563433) {
                        if (input[1] < -0.4093985) {
                            var50 = 0.6839502;
                        } else {
                            var50 = 0.26971608;
                        }
                    } else {
                        var50 = -0.14258474;
                    }
                }
            } else {
                if (input[0] < -0.34926406) {
                    if (input[4] < -0.22661352) {
                        if (input[4] < -0.33411452) {
                            var50 = -0.0438519;
                        } else {
                            var50 = -0.48165402;
                        }
                    } else {
                        if (input[1] < -0.2910625) {
                            var50 = -0.014759428;
                        } else {
                            var50 = -0.14045846;
                        }
                    }
                } else {
                    if (input[3] < -0.31081644) {
                        if (input[1] < -0.3386689) {
                            var50 = -0.092065305;
                        } else {
                            var50 = -0.33300173;
                        }
                    } else {
                        if (input[4] < -0.22661352) {
                            var50 = 0.259162;
                        } else {
                            var50 = -0.10444378;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.3800264) {
            if (input[3] < -0.4314262) {
                if (input[1] < -0.4148392) {
                    if (input[1] < -0.42300034) {
                        if (input[7] < 2.2086458) {
                            var50 = -0.019300137;
                        } else {
                            var50 = 0.058164235;
                        }
                    } else {
                        if (input[6] < 0.832688) {
                            var50 = 0.42229497;
                        } else {
                            var50 = 0.04687059;
                        }
                    }
                } else {
                    if (input[4] < -0.39309075) {
                        if (input[1] < -0.41075867) {
                            var50 = -0.4895488;
                        } else {
                            var50 = -0.062869154;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var50 = -0.19391608;
                        } else {
                            var50 = 0.12092688;
                        }
                    }
                }
            } else {
                if (input[2] < -0.25191775) {
                    if (input[0] < -0.34926406) {
                        var50 = -0.1822813;
                    } else {
                        if (input[0] < -0.34536317) {
                            var50 = -0.019836046;
                        } else {
                            var50 = 0.10099526;
                        }
                    }
                } else {
                    if (input[1] < -0.38083464) {
                        if (input[1] < -0.40531793) {
                            var50 = 0.26106584;
                        } else {
                            var50 = 0.8313466;
                        }
                    } else {
                        var50 = -0.17197134;
                    }
                }
            }
        } else {
            if (input[4] < -0.2714056) {
                if (input[1] < -0.34683004) {
                    if (input[1] < -0.35499114) {
                        if (input[6] < 0.832688) {
                            var50 = 0.36447304;
                        } else {
                            var50 = -0.033914827;
                        }
                    } else {
                        if (input[7] < 1.5832454) {
                            var50 = -0.019035611;
                        } else {
                            var50 = 0.7354728;
                        }
                    }
                } else {
                    if (input[2] < -0.25191775) {
                        if (input[6] < 0.8608831) {
                            var50 = -0.13774276;
                        } else {
                            var50 = 0.14916912;
                        }
                    } else {
                        if (input[7] < 1.061024) {
                            var50 = -0.087285236;
                        } else {
                            var50 = -0.26823083;
                        }
                    }
                }
            } else {
                if (input[0] < -0.29855236) {
                    if (input[7] < 1.7161589) {
                        if (input[3] < 0.16065814) {
                            var50 = 0.43565542;
                        } else {
                            var50 = 0.115997344;
                        }
                    } else {
                        if (input[1] < -0.32098654) {
                            var50 = 0.30017424;
                        } else {
                            var50 = -0.112543106;
                        }
                    }
                } else {
                    if (input[4] < -0.2680462) {
                        var50 = 0.33749372;
                    } else {
                        if (input[0] < -0.21273255) {
                            var50 = -0.08916885;
                        } else {
                            var50 = 0.0042820135;
                        }
                    }
                }
            }
        }
    }
    var var51;
    if (input[4] < -0.34157985) {
        if (input[3] < -0.34371) {
            if (input[1] < -0.34274948) {
                if (input[1] < -0.35499114) {
                    if (input[4] < -0.34307292) {
                        if (input[1] < -0.37811425) {
                            var51 = 0.0014498398;
                        } else {
                            var51 = -0.030142957;
                        }
                    } else {
                        if (input[7] < 1.6732836) {
                            var51 = 0.025304735;
                        } else {
                            var51 = 0.37321392;
                        }
                    }
                } else {
                    if (input[7] < 0.11262171) {
                        if (input[6] < -0.7141563) {
                            var51 = 0.04061144;
                        } else {
                            var51 = -0.15534206;
                        }
                    } else {
                        if (input[6] < -0.6382811) {
                            var51 = 0.48984334;
                        } else {
                            var51 = 0.10137857;
                        }
                    }
                }
            } else {
                if (input[4] < -0.35139146) {
                    if (input[7] < 2.2242022) {
                        if (input[1] < -0.3386689) {
                            var51 = -0.30615672;
                        } else {
                            var51 = -0.009622527;
                        }
                    } else {
                        if (input[4] < -0.35927713) {
                            var51 = 0.15258001;
                        } else {
                            var51 = 0.7578023;
                        }
                    }
                } else {
                    if (input[7] < -0.47378084) {
                        if (input[7] < -0.48763284) {
                            var51 = -0.10522781;
                        } else {
                            var51 = 0.10906453;
                        }
                    } else {
                        if (input[4] < -0.34307292) {
                            var51 = -0.3195626;
                        } else {
                            var51 = -0.052736003;
                        }
                    }
                }
            }
        } else {
            if (input[7] < -0.25025946) {
                if (input[7] < -0.3790574) {
                    if (input[7] < -0.57767105) {
                        if (input[7] < -0.7464926) {
                            var51 = 0.00044374046;
                        } else {
                            var51 = 0.060406055;
                        }
                    } else {
                        if (input[6] < -1.2959688) {
                            var51 = -0.12309782;
                        } else {
                            var51 = -0.04193638;
                        }
                    }
                } else {
                    if (input[0] < -0.31805685) {
                        if (input[0] < -0.34536317) {
                            var51 = -0.042810507;
                        } else {
                            var51 = 0.021425629;
                        }
                    } else {
                        var51 = 0.26428932;
                    }
                }
            } else {
                if (input[1] < -0.3386689) {
                    if (input[1] < -0.35363096) {
                        if (input[1] < -0.3577115) {
                            var51 = -0.09793672;
                        } else {
                            var51 = 0.18780938;
                        }
                    } else {
                        if (input[6] < -0.5125253) {
                            var51 = -0.3347521;
                        } else {
                            var51 = -0.18364614;
                        }
                    }
                } else {
                    if (input[6] < -0.552997) {
                        if (input[4] < -0.36350933) {
                            var51 = 0.87190086;
                        } else {
                            var51 = -0.0034043808;
                        }
                    } else {
                        if (input[3] < -0.31081644) {
                            var51 = -0.1638007;
                        } else {
                            var51 = 0.1311351;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.34083334) {
            if (input[7] < -0.3457545) {
                if (input[0] < -0.33756137) {
                    var51 = 0.101615496;
                } else {
                    if (input[6] < -1.6721268) {
                        var51 = -0.022094786;
                    } else {
                        var51 = -0.14470288;
                    }
                }
            } else {
                if (input[7] < 1.3185877) {
                    var51 = 0.7052326;
                } else {
                    var51 = 0.16204655;
                }
            }
        } else {
            if (input[7] < 0.8062492) {
                if (input[7] < 0.6548189) {
                    if (input[7] < 0.3372331) {
                        if (input[7] < 0.19665734) {
                            var51 = -0.00032721055;
                        } else {
                            var51 = -0.027445579;
                        }
                    } else {
                        if (input[4] < -0.3352343) {
                            var51 = 0.26698798;
                        } else {
                            var51 = 0.013343106;
                        }
                    }
                } else {
                    if (input[3] < 0.5170052) {
                        if (input[3] < 0.24289207) {
                            var51 = -0.041378185;
                        } else {
                            var51 = -0.53687793;
                        }
                    } else {
                        if (input[4] < 1.5157983) {
                            var51 = 0.6026446;
                        } else {
                            var51 = -0.034579586;
                        }
                    }
                }
            } else {
                if (input[7] < 0.8547546) {
                    if (input[4] < -0.3352343) {
                        var51 = 0.5940352;
                    } else {
                        if (input[1] < -0.31826618) {
                            var51 = -0.1021149;
                        } else {
                            var51 = 0.36708677;
                        }
                    }
                } else {
                    if (input[4] < -0.3352343) {
                        if (input[7] < 2.3104768) {
                            var51 = -0.33950388;
                        } else {
                            var51 = 0.14098696;
                        }
                    } else {
                        if (input[4] < -0.33411452) {
                            var51 = 0.3135241;
                        } else {
                            var51 = 0.008490303;
                        }
                    }
                }
            }
        }
    }
    var var52;
    if (input[1] < -0.35499114) {
        if (input[1] < -0.36179206) {
            if (input[6] < -0.5125253) {
                if (input[7] < -0.25253314) {
                    if (input[2] < -0.18135624) {
                        if (input[7] < -0.67771345) {
                            var52 = -0.002694688;
                        } else {
                            var52 = -0.03031628;
                        }
                    } else {
                        if (input[6] < -1.2959688) {
                            var52 = 0.3664596;
                        } else {
                            var52 = -0.007821386;
                        }
                    }
                } else {
                    if (input[4] < -0.3774135) {
                        if (input[1] < -0.40531793) {
                            var52 = 0.010892963;
                        } else {
                            var52 = -0.078871064;
                        }
                    } else {
                        if (input[7] < 0.6268939) {
                            var52 = 0.05030627;
                        } else {
                            var52 = 0.3035251;
                        }
                    }
                }
            } else {
                if (input[6] < -0.38885298) {
                    if (input[1] < -0.39443648) {
                        if (input[1] < -0.4080383) {
                            var52 = -0.033650957;
                        } else {
                            var52 = -0.15046996;
                        }
                    } else {
                        if (input[7] < 0.3372331) {
                            var52 = 0.04784779;
                        } else {
                            var52 = -0.19404697;
                        }
                    }
                } else {
                    if (input[5] < 0.89645296) {
                        if (input[0] < -0.29855236) {
                            var52 = 0.026071683;
                        } else {
                            var52 = -0.019909976;
                        }
                    } else {
                        if (input[1] < -0.36315224) {
                            var52 = -0.0033383952;
                        } else {
                            var52 = -0.24918227;
                        }
                    }
                }
            }
        } else {
            if (input[6] < 0.097515695) {
                if (input[7] < 1.1330545) {
                    if (input[0] < -0.34536317) {
                        if (input[7] < -0.5640289) {
                            var52 = -0.041616026;
                        } else {
                            var52 = -0.5615995;
                        }
                    } else {
                        if (input[7] < -0.5094603) {
                            var52 = 0.010732154;
                        } else {
                            var52 = -0.092775054;
                        }
                    }
                } else {
                    if (input[6] < -0.17199324) {
                        var52 = 0.59810674;
                    } else {
                        if (input[7] < 1.6732836) {
                            var52 = -0.34675086;
                        } else {
                            var52 = 0.18597682;
                        }
                    }
                }
            } else {
                if (input[6] < 0.6680634) {
                    if (input[7] < 0.25839782) {
                        if (input[2] < -0.23563433) {
                            var52 = 0.1206453;
                        } else {
                            var52 = -0.1379352;
                        }
                    } else {
                        if (input[4] < -0.35139146) {
                            var52 = -0.026702994;
                        } else {
                            var52 = 0.2445712;
                        }
                    }
                } else {
                    if (input[7] < 0.99799716) {
                        if (input[0] < -0.26734516) {
                            var52 = 0.040504985;
                        } else {
                            var52 = -0.049469866;
                        }
                    } else {
                        if (input[7] < 2.3132608) {
                            var52 = -0.2425939;
                        } else {
                            var52 = 0.06786795;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.35091057) {
            if (input[0] < -0.34536317) {
                if (input[7] < 0.6228381) {
                    if (input[4] < -0.36591688) {
                        if (input[6] < -1.0206758) {
                            var52 = 0.40570262;
                        } else {
                            var52 = -0.08941441;
                        }
                    } else {
                        if (input[4] < -0.34307292) {
                            var52 = -0.18142341;
                        } else {
                            var52 = 0.22788693;
                        }
                    }
                } else {
                    if (input[7] < 1.8501443) {
                        var52 = 0.609301;
                    } else {
                        var52 = 0.12173634;
                    }
                }
            } else {
                if (input[7] < 1.2230927) {
                    if (input[6] < -0.86047095) {
                        if (input[1] < -0.35363096) {
                            var52 = -0.11776379;
                        } else {
                            var52 = 0.045047734;
                        }
                    } else {
                        if (input[6] < -0.6802001) {
                            var52 = 0.37147996;
                        } else {
                            var52 = 0.030615764;
                        }
                    }
                } else {
                    var52 = -0.5076786;
                }
            }
        } else {
            if (input[4] < -0.34157985) {
                if (input[1] < -0.23801532) {
                    if (input[6] < 0.03295901) {
                        if (input[7] < 0.90629166) {
                            var52 = -0.03764104;
                        } else {
                            var52 = -0.2892909;
                        }
                    } else {
                        if (input[6] < 0.070459716) {
                            var52 = 0.36809093;
                        } else {
                            var52 = -0.011544723;
                        }
                    }
                } else {
                    if (input[7] < 0.40215626) {
                        if (input[6] < -1.4422677) {
                            var52 = 0.066417046;
                        } else {
                            var52 = -0.056552928;
                        }
                    } else {
                        if (input[7] < 0.5394694) {
                            var52 = 0.82264507;
                        } else {
                            var52 = 0.02839528;
                        }
                    }
                }
            } else {
                if (input[3] < -0.31081644) {
                    if (input[7] < 0.25839782) {
                        if (input[6] < -0.036795624) {
                            var52 = 0.020907156;
                        } else {
                            var52 = -0.09218347;
                        }
                    } else {
                        if (input[4] < -0.33411452) {
                            var52 = 0.315301;
                        } else {
                            var52 = 0.05182099;
                        }
                    }
                } else {
                    if (input[4] < -0.3352343) {
                        if (input[7] < -0.2809543) {
                            var52 = 0.011817877;
                        } else {
                            var52 = -0.3363563;
                        }
                    } else {
                        if (input[4] < -0.32664916) {
                            var52 = 0.103498496;
                        } else {
                            var52 = -0.0012914636;
                        }
                    }
                }
            }
        }
    }
    var var53;
    if (input[6] < 0.807752) {
        if (input[6] < 0.5399172) {
            if (input[6] < 0.52116257) {
                if (input[2] < -0.13793376) {
                    if (input[2] < -0.18135624) {
                        if (input[4] < 0.07797262) {
                            var53 = -0.0018927961;
                        } else {
                            var53 = 0.010372096;
                        }
                    } else {
                        if (input[1] < 2.1885526) {
                            var53 = 0.019838087;
                        } else {
                            var53 = 0.6789144;
                        }
                    }
                } else {
                    if (input[7] < 1.4277248) {
                        if (input[7] < 1.1330545) {
                            var53 = -0.0038781173;
                        } else {
                            var53 = -0.11723089;
                        }
                    } else {
                        if (input[1] < -0.07615345) {
                            var53 = 0.026495704;
                        } else {
                            var53 = 0.38077977;
                        }
                    }
                }
            } else {
                if (input[1] < -0.23801532) {
                    if (input[1] < -0.3495504) {
                        if (input[1] < -0.4168795) {
                            var53 = 0.1295852;
                        } else {
                            var53 = -0.054271117;
                        }
                    } else {
                        if (input[1] < -0.31826618) {
                            var53 = 0.8102248;
                        } else {
                            var53 = 0.13808526;
                        }
                    }
                } else {
                    if (input[2] < -0.13793376) {
                        if (input[0] < -0.29855236) {
                            var53 = -0.050608385;
                        } else {
                            var53 = -0.38487202;
                        }
                    } else {
                        var53 = 0.27337942;
                    }
                }
            }
        } else {
            if (input[2] < -0.23563433) {
                if (input[3] < -0.07507915) {
                    if (input[4] < -0.27812442) {
                        if (input[4] < -0.30276006) {
                            var53 = 0.00403339;
                        } else {
                            var53 = 0.39230898;
                        }
                    } else {
                        if (input[6] < 0.7535138) {
                            var53 = -0.09290276;
                        } else {
                            var53 = -0.30395803;
                        }
                    }
                } else {
                    if (input[4] < -0.193766) {
                        if (input[6] < 0.6409217) {
                            var53 = -0.08081151;
                        } else {
                            var53 = 0.7986276;
                        }
                    } else {
                        if (input[4] < -0.06984124) {
                            var53 = -0.12807152;
                        } else {
                            var53 = 0.09091584;
                        }
                    }
                }
            } else {
                if (input[7] < -0.5276498) {
                    if (input[4] < -0.36350933) {
                        var53 = 0.80710214;
                    } else {
                        if (input[0] < 0.10714126) {
                            var53 = -0.048832104;
                        } else {
                            var53 = 0.011149087;
                        }
                    }
                } else {
                    if (input[4] < -0.09671649) {
                        if (input[1] < -0.32914764) {
                            var53 = -0.07986503;
                        } else {
                            var53 = 0.15598981;
                        }
                    } else {
                        if (input[0] < -0.048894748) {
                            var53 = -0.27397475;
                        } else {
                            var53 = -0.04729053;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.40466204) {
            if (input[1] < -0.42776096) {
                if (input[6] < 0.832688) {
                    var53 = -0.23291354;
                } else {
                    if (input[7] < 0.8062492) {
                        if (input[7] < -0.10175492) {
                            var53 = 0.017207457;
                        } else {
                            var53 = -0.20285115;
                        }
                    } else {
                        if (input[7] < 2.3104768) {
                            var53 = 0.023081973;
                        } else {
                            var53 = -0.045372643;
                        }
                    }
                }
            } else {
                if (input[6] < 0.87345564) {
                    if (input[6] < 0.832688) {
                        if (input[1] < -0.4257207) {
                            var53 = 0.18746665;
                        } else {
                            var53 = -0.31948075;
                        }
                    } else {
                        if (input[1] < -0.4257207) {
                            var53 = 0.1263875;
                        } else {
                            var53 = 0.4925304;
                        }
                    }
                } else {
                    var53 = -0.3595938;
                }
            }
        } else {
            if (input[4] < -0.40226245) {
                if (input[6] < 0.8608831) {
                    if (input[1] < -0.4243605) {
                        var53 = -0.3745777;
                    } else {
                        if (input[1] < -0.42027995) {
                            var53 = -0.13169184;
                        } else {
                            var53 = -0.027605511;
                        }
                    }
                } else {
                    if (input[0] < -0.34926406) {
                        if (input[6] < 1.1517857) {
                            var53 = -0.3218068;
                        } else {
                            var53 = 0.20530286;
                        }
                    } else {
                        var53 = 0.5439707;
                    }
                }
            } else {
                if (input[7] < 2.2086458) {
                    if (input[7] < 1.9305356) {
                        if (input[4] < -0.3884249) {
                            var53 = 0.030374974;
                        } else {
                            var53 = 0.0019966962;
                        }
                    } else {
                        if (input[1] < -0.41891977) {
                            var53 = 0.7123606;
                        } else {
                            var53 = 0.045893822;
                        }
                    }
                } else {
                    if (input[7] < 2.5736654) {
                        if (input[1] < -0.42164013) {
                            var53 = -0.40535125;
                        } else {
                            var53 = -0.08218461;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var53 = 0.12338284;
                        } else {
                            var53 = -0.011179026;
                        }
                    }
                }
            }
        }
    }
    var var54;
    if (input[2] < -0.25191775) {
        if (input[1] < -0.21897274) {
            if (input[1] < -0.24481624) {
                if (input[6] < -1.2959688) {
                    if (input[7] < -0.20251194) {
                        if (input[7] < -0.3790574) {
                            var54 = 0.0075767315;
                        } else {
                            var54 = -0.08377356;
                        }
                    } else {
                        if (input[1] < -0.4175596) {
                            var54 = -0.12914687;
                        } else {
                            var54 = 0.41269886;
                        }
                    }
                } else {
                    if (input[6] < -0.9531228) {
                        if (input[1] < -0.25841808) {
                            var54 = -0.047768004;
                        } else {
                            var54 = 0.14906162;
                        }
                    } else {
                        if (input[7] < 0.5327999) {
                            var54 = 0.01688738;
                        } else {
                            var54 = -0.015736083;
                        }
                    }
                }
            } else {
                if (input[7] < 0.3372331) {
                    if (input[4] < -0.18630065) {
                        if (input[7] < 0.06545885) {
                            var54 = -0.030333376;
                        } else {
                            var54 = 0.122956164;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var54 = 0.048098072;
                        } else {
                            var54 = 0.25862518;
                        }
                    }
                } else {
                    if (input[0] < -0.31805685) {
                        if (input[6] < 0.36121142) {
                            var54 = 0.7974424;
                        } else {
                            var54 = -0.02537451;
                        }
                    } else {
                        var54 = -0.17023966;
                    }
                }
            }
        } else {
            if (input[1] < -0.19448943) {
                if (input[0] < -0.34926406) {
                    if (input[7] < -0.98284286) {
                        var54 = -0.023932332;
                    } else {
                        var54 = -0.46518365;
                    }
                } else {
                    if (input[7] < 0.5394694) {
                        if (input[7] < -0.5367446) {
                            var54 = -0.028901614;
                        } else {
                            var54 = -0.1540861;
                        }
                    } else {
                        var54 = 0.19912727;
                    }
                }
            } else {
                if (input[4] < -0.30499965) {
                    if (input[0] < -0.34926406) {
                        if (input[1] < -0.10199694) {
                            var54 = 0.02253598;
                        } else {
                            var54 = 0.5127777;
                        }
                    } else {
                        if (input[7] < 0.3372331) {
                            var54 = -0.019120714;
                        } else {
                            var54 = 0.18308999;
                        }
                    }
                } else {
                    if (input[7] < 0.16795768) {
                        if (input[4] < -0.2863363) {
                            var54 = -0.09198321;
                        } else {
                            var54 = -0.004151267;
                        }
                    } else {
                        if (input[0] < 0.036925055) {
                            var54 = -0.064495206;
                        } else {
                            var54 = 0.2224923;
                        }
                    }
                }
            }
        }
    } else {
        if (input[6] < -1.565383) {
            if (input[2] < -0.24648994) {
                if (input[7] < -0.5094603) {
                    if (input[7] < -0.78776014) {
                        if (input[1] < 0.1387556) {
                            var54 = -0.0104331365;
                        } else {
                            var54 = 0.04257424;
                        }
                    } else {
                        if (input[3] < 0.5170052) {
                            var54 = 0.08401308;
                        } else {
                            var54 = -0.086918004;
                        }
                    }
                } else {
                    var54 = -0.16038296;
                }
            } else {
                if (input[1] < -0.4257207) {
                    var54 = 0.14963695;
                } else {
                    if (input[0] < -0.12691276) {
                        if (input[2] < -0.18135624) {
                            var54 = -0.02442613;
                        } else {
                            var54 = -0.07843603;
                        }
                    } else {
                        if (input[1] < -0.250257) {
                            var54 = 0.064589225;
                        } else {
                            var54 = -0.008080224;
                        }
                    }
                }
            }
        } else {
            if (input[6] < -1.5376232) {
                if (input[1] < 0.18976249) {
                    if (input[0] < -0.21273255) {
                        if (input[1] < -0.25569773) {
                            var54 = -0.05140574;
                        } else {
                            var54 = 0.22004406;
                        }
                    } else {
                        if (input[3] < -0.19568892) {
                            var54 = -0.021418262;
                        } else {
                            var54 = -0.15819682;
                        }
                    }
                } else {
                    if (input[1] < 0.22036663) {
                        var54 = 0.8148752;
                    } else {
                        if (input[0] < -0.17372355) {
                            var54 = 0.010308695;
                        } else {
                            var54 = 0.26099628;
                        }
                    }
                }
            } else {
                if (input[6] < -1.4912626) {
                    if (input[2] < -0.18135624) {
                        if (input[7] < -0.10175492) {
                            var54 = -0.035637993;
                        } else {
                            var54 = -0.21657024;
                        }
                    } else {
                        if (input[2] < -0.13793376) {
                            var54 = 0.42667195;
                        } else {
                            var54 = 0.054902706;
                        }
                    }
                } else {
                    if (input[6] < -1.3535084) {
                        if (input[1] < -0.38967583) {
                            var54 = -0.033566996;
                        } else {
                            var54 = 0.0312405;
                        }
                    } else {
                        if (input[1] < -0.4257207) {
                            var54 = -0.0074465014;
                        } else {
                            var54 = 0.0013459646;
                        }
                    }
                }
            }
        }
    }
    var var55;
    if (input[7] < 3.248952) {
        if (input[7] < 2.4836273) {
            if (input[7] < 1.8915579) {
                if (input[1] < -0.27542037) {
                    if (input[1] < -0.28426158) {
                        if (input[7] < 1.8906171) {
                            var55 = 0.0011330437;
                        } else {
                            var55 = -0.04972466;
                        }
                    } else {
                        if (input[7] < 0.90629166) {
                            var55 = -0.00017484352;
                        } else {
                            var55 = 0.52336305;
                        }
                    }
                } else {
                    if (input[1] < -0.23393477) {
                        if (input[7] < 1.8906171) {
                            var55 = -0.0258099;
                        } else {
                            var55 = 0.39397737;
                        }
                    } else {
                        if (input[7] < 1.8294723) {
                            var55 = 0.0012977449;
                        } else {
                            var55 = -0.11826881;
                        }
                    }
                }
            } else {
                if (input[1] < 1.1942582) {
                    if (input[1] < 1.1194482) {
                        if (input[6] < 1.2632518) {
                            var55 = 0.0064816414;
                        } else {
                            var55 = 0.20594425;
                        }
                    } else {
                        var55 = 0.3747063;
                    }
                } else {
                    if (input[2] < -0.25191775) {
                        var55 = 0.059706513;
                    } else {
                        if (input[0] < -0.34536317) {
                            var55 = -0.07707746;
                        } else {
                            var55 = -0.34698585;
                        }
                    }
                }
            }
        } else {
            if (input[0] < -0.34926406) {
                if (input[4] < -0.39010462) {
                    if (input[1] < -0.4168795) {
                        if (input[4] < -0.40130264) {
                            var55 = -0.1308279;
                        } else {
                            var55 = -0.016561868;
                        }
                    } else {
                        var55 = -0.23129605;
                    }
                } else {
                    if (input[1] < -0.37811425) {
                        if (input[1] < -0.41619942) {
                            var55 = 0.2591841;
                        } else {
                            var55 = 0.04539403;
                        }
                    } else {
                        if (input[1] < -0.33594856) {
                            var55 = -0.24212486;
                        } else {
                            var55 = -0.0659583;
                        }
                    }
                }
            } else {
                if (input[1] < -0.42027995) {
                    if (input[6] < 0.3804174) {
                        if (input[5] < 0.89645296) {
                            var55 = -0.049441576;
                        } else {
                            var55 = 0.18062316;
                        }
                    } else {
                        if (input[1] < -0.42368042) {
                            var55 = -0.04385664;
                        } else {
                            var55 = 0.11672246;
                        }
                    }
                } else {
                    if (input[1] < -0.4168795) {
                        if (input[5] < 0.89645296) {
                            var55 = -0.09881247;
                        } else {
                            var55 = -0.27443376;
                        }
                    } else {
                        if (input[3] < -0.44513187) {
                            var55 = 0.19669448;
                        } else {
                            var55 = -0.017211018;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.39309075) {
            if (input[1] < -0.41891977) {
                if (input[0] < -0.34536317) {
                    if (input[6] < 1.1517857) {
                        if (input[1] < -0.42844105) {
                            var55 = 0.077254035;
                        } else {
                            var55 = -0.22335304;
                        }
                    } else {
                        if (input[1] < -0.42844105) {
                            var55 = -0.029869128;
                        } else {
                            var55 = 0.17686787;
                        }
                    }
                } else {
                    var55 = 0.2896793;
                }
            } else {
                var55 = 0.461421;
            }
        } else {
            if (input[4] < -0.35576403) {
                if (input[6] < 1.7796307) {
                    if (input[6] < 0.46406695) {
                        var55 = 0.00077838905;
                    } else {
                        if (input[0] < -0.34926406) {
                            var55 = -0.0480835;
                        } else {
                            var55 = -0.24324834;
                        }
                    }
                } else {
                    var55 = 0.22872606;
                }
            } else {
                if (input[6] < 1.7796307) {
                    if (input[4] < -0.27409312) {
                        if (input[6] < 0.03295901) {
                            var55 = -0.00593108;
                        } else {
                            var55 = 0.14191465;
                        }
                    } else {
                        if (input[6] < 0.807752) {
                            var55 = -0.034552272;
                        } else {
                            var55 = 0.05851152;
                        }
                    }
                } else {
                    if (input[0] < -0.33756137) {
                        var55 = 0.06934133;
                    } else {
                        if (input[0] < -0.26734516) {
                            var55 = -0.30541945;
                        } else {
                            var55 = -0.0660121;
                        }
                    }
                }
            }
        }
    }
    var var56;
    if (input[7] < 3.0238564) {
        if (input[7] < 2.4836273) {
            if (input[0] < 2.8455732) {
                if (input[1] < 5.0197754) {
                    if (input[3] < 5.2865734) {
                        if (input[3] < 4.464234) {
                            var56 = 0.00032994573;
                        } else {
                            var56 = 0.07725865;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var56 = -0.113413416;
                        } else {
                            var56 = 0.017784799;
                        }
                    }
                } else {
                    if (input[7] < -0.19951066) {
                        if (input[7] < -0.45574433) {
                            var56 = 0.013370431;
                        } else {
                            var56 = 0.13679503;
                        }
                    } else {
                        if (input[6] < -0.21728392) {
                            var56 = -0.009858612;
                        } else {
                            var56 = -0.087769985;
                        }
                    }
                }
            } else {
                if (input[1] < 0.9875103) {
                    if (input[7] < -0.10175492) {
                        if (input[6] < -0.33531734) {
                            var56 = -0.098397;
                        } else {
                            var56 = 0.028372433;
                        }
                    } else {
                        var56 = 0.23305427;
                    }
                } else {
                    if (input[7] < -0.2809543) {
                        if (input[3] < 8.027704) {
                            var56 = -0.017621806;
                        } else {
                            var56 = 0.017323684;
                        }
                    } else {
                        if (input[1] < 2.524518) {
                            var56 = -0.2601692;
                        } else {
                            var56 = -0.0034692623;
                        }
                    }
                }
            }
        } else {
            if (input[1] < 0.104751006) {
                if (input[1] < -0.070712715) {
                    if (input[4] < -0.2680462) {
                        if (input[4] < -0.2758848) {
                            var56 = -0.020251695;
                        } else {
                            var56 = -0.44687653;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var56 = -0.07531481;
                        } else {
                            var56 = 0.1312653;
                        }
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        var56 = -0.03970435;
                    } else {
                        var56 = -0.23701282;
                    }
                }
            } else {
                if (input[0] < -0.21273255) {
                    if (input[3] < 0.16065814) {
                        if (input[0] < -0.33756137) {
                            var56 = -0.1035592;
                        } else {
                            var56 = 0.09651626;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var56 = 0.19489102;
                        } else {
                            var56 = -0.011172271;
                        }
                    }
                } else {
                    var56 = -0.09227239;
                }
            }
        }
    } else {
        if (input[1] < -0.4080383) {
            if (input[6] < 1.7796307) {
                if (input[0] < -0.34536317) {
                    if (input[1] < -0.41891977) {
                        if (input[4] < -0.40130264) {
                            var56 = 0.021004908;
                        } else {
                            var56 = -0.101072006;
                        }
                    } else {
                        if (input[4] < -0.40130264) {
                            var56 = -0.16228169;
                        } else {
                            var56 = 0.10553581;
                        }
                    }
                } else {
                    if (input[1] < -0.4257207) {
                        var56 = 0.24622737;
                    } else {
                        if (input[1] < -0.4175596) {
                            var56 = -0.05685804;
                        } else {
                            var56 = 0.1482204;
                        }
                    }
                }
            } else {
                var56 = -0.2596065;
            }
        } else {
            if (input[4] < -0.39458382) {
                var56 = 0.38381296;
            } else {
                if (input[3] < -0.40949714) {
                    if (input[7] < 3.248952) {
                        if (input[0] < -0.34536317) {
                            var56 = -0.32438743;
                        } else {
                            var56 = -0.12800567;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var56 = 0.22360268;
                        } else {
                            var56 = 0.018336201;
                        }
                    }
                } else {
                    if (input[1] < -0.37811425) {
                        if (input[6] < 0.066193745) {
                            var56 = 0.3101854;
                        } else {
                            var56 = -0.1537481;
                        }
                    } else {
                        if (input[6] < 0.066193745) {
                            var56 = -0.077089176;
                        } else {
                            var56 = 0.043489844;
                        }
                    }
                }
            }
        }
    }
    var var57;
    if (input[6] < -0.9418565) {
        if (input[2] < -0.13793376) {
            if (input[3] < -0.44513187) {
                if (input[7] < -0.5640289) {
                    if (input[0] < -0.34536317) {
                        if (input[6] < -1.6475645) {
                            var57 = -0.04538504;
                        } else {
                            var57 = -0.010103711;
                        }
                    } else {
                        if (input[4] < -0.40018284) {
                            var57 = 0.099526875;
                        } else {
                            var57 = 0.0051585855;
                        }
                    }
                } else {
                    if (input[1] < -0.4175596) {
                        if (input[1] < -0.42708087) {
                            var57 = -0.015799113;
                        } else {
                            var57 = -0.13040507;
                        }
                    } else {
                        if (input[2] < -0.24648994) {
                            var57 = -0.038129274;
                        } else {
                            var57 = 0.17048678;
                        }
                    }
                }
            } else {
                if (input[7] < -0.48579535) {
                    if (input[1] < -0.4168795) {
                        if (input[7] < -0.7384535) {
                            var57 = -0.06651111;
                        } else {
                            var57 = 0.23308559;
                        }
                    } else {
                        if (input[3] < 4.464234) {
                            var57 = 0.0012748835;
                        } else {
                            var57 = -0.09246356;
                        }
                    }
                } else {
                    if (input[1] < -0.088395104) {
                        if (input[3] < -0.34371) {
                            var57 = 0.046504237;
                        } else {
                            var57 = -0.03309003;
                        }
                    } else {
                        if (input[1] < 0.28293508) {
                            var57 = 0.10168753;
                        } else {
                            var57 = 0.009912011;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 0.084374435) {
                if (input[7] < -0.011301813) {
                    if (input[7] < -0.3457545) {
                        if (input[7] < -0.3790574) {
                            var57 = -0.0065778363;
                        } else {
                            var57 = 0.27100307;
                        }
                    } else {
                        if (input[1] < 0.28293508) {
                            var57 = -0.15616047;
                        } else {
                            var57 = 0.05404077;
                        }
                    }
                } else {
                    if (input[1] < 0.17003983) {
                        var57 = -0.019226933;
                    } else {
                        var57 = 0.7981834;
                    }
                }
            } else {
                if (input[3] < 4.464234) {
                    if (input[0] < -0.048894748) {
                        if (input[1] < -0.088395104) {
                            var57 = -0.19467367;
                        } else {
                            var57 = -0.47054175;
                        }
                    } else {
                        if (input[6] < -1.4912626) {
                            var57 = 0.0690642;
                        } else {
                            var57 = -0.16194275;
                        }
                    }
                } else {
                    var57 = 0.38446543;
                }
            }
        }
    } else {
        if (input[6] < -0.552997) {
            if (input[1] < -0.4168795) {
                if (input[1] < -0.42232025) {
                    if (input[6] < -0.5637625) {
                        if (input[1] < -0.42776096) {
                            var57 = 0.10741115;
                        } else {
                            var57 = -0.04250147;
                        }
                    } else {
                        if (input[1] < -0.42776096) {
                            var57 = 0.067946345;
                        } else {
                            var57 = 0.34654832;
                        }
                    }
                } else {
                    if (input[0] < -0.33756137) {
                        if (input[7] < 0.6268939) {
                            var57 = 0.013052883;
                        } else {
                            var57 = -0.23015882;
                        }
                    } else {
                        if (input[7] < -0.2334074) {
                            var57 = -0.006929996;
                        } else {
                            var57 = 0.33411077;
                        }
                    }
                }
            } else {
                if (input[0] < -0.29855236) {
                    if (input[1] < 3.6507502) {
                        if (input[3] < 0.9007636) {
                            var57 = -0.027002586;
                        } else {
                            var57 = -0.12915745;
                        }
                    } else {
                        if (input[6] < -0.74489737) {
                            var57 = -0.10822259;
                        } else {
                            var57 = 0.24132901;
                        }
                    }
                } else {
                    if (input[1] < 0.78892344) {
                        if (input[1] < 0.7277152) {
                            var57 = 0.0051263594;
                        } else {
                            var57 = 0.28201357;
                        }
                    } else {
                        if (input[7] < 0.022583526) {
                            var57 = -0.012035108;
                        } else {
                            var57 = -0.16426013;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.29436153) {
                if (input[1] < -0.31690598) {
                    if (input[1] < -0.3237069) {
                        if (input[0] < -0.21273255) {
                            var57 = 0.0018253846;
                        } else {
                            var57 = -0.032681327;
                        }
                    } else {
                        if (input[0] < -0.21273255) {
                            var57 = 0.33768296;
                        } else {
                            var57 = -0.18351696;
                        }
                    }
                } else {
                    if (input[0] < -0.34926406) {
                        if (input[1] < -0.2910625) {
                            var57 = 0.33387083;
                        } else {
                            var57 = -0.11474644;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var57 = -0.032236412;
                        } else {
                            var57 = -0.16469914;
                        }
                    }
                }
            } else {
                if (input[4] < -0.29021826) {
                    if (input[6] < 0.23643003) {
                        if (input[0] < -0.34536317) {
                            var57 = -0.40407768;
                        } else {
                            var57 = 0.112587765;
                        }
                    } else {
                        if (input[6] < 0.60563) {
                            var57 = 0.6903368;
                        } else {
                            var57 = -0.06705893;
                        }
                    }
                } else {
                    if (input[6] < 0.07505404) {
                        if (input[7] < -0.04562722) {
                            var57 = 0.0015788309;
                        } else {
                            var57 = 0.0419019;
                        }
                    } else {
                        if (input[6] < 0.14970104) {
                            var57 = -0.03182267;
                        } else {
                            var57 = -0.00045189873;
                        }
                    }
                }
            }
        }
    }
    var var58;
    if (input[7] < 0.55423754) {
        if (input[7] < 0.5512693) {
            if (input[7] < 0.54780626) {
                if (input[4] < -0.36350933) {
                    if (input[3] < -0.37112132) {
                        if (input[0] < -0.29855236) {
                            var58 = 0.0042096316;
                        } else {
                            var58 = -0.029690696;
                        }
                    } else {
                        if (input[7] < 0.1638199) {
                            var58 = 0.06081569;
                        } else {
                            var58 = 0.69107103;
                        }
                    }
                } else {
                    if (input[4] < -0.36248282) {
                        if (input[7] < -0.36236233) {
                            var58 = -0.0377516;
                        } else {
                            var58 = -0.1957991;
                        }
                    } else {
                        if (input[3] < -0.40949714) {
                            var58 = -0.019285439;
                        } else {
                            var58 = 0.0001816502;
                        }
                    }
                }
            } else {
                if (input[4] < -0.30947888) {
                    if (input[4] < -0.36248282) {
                        if (input[1] < -0.4148392) {
                            var58 = -0.1462297;
                        } else {
                            var58 = 0.27116805;
                        }
                    } else {
                        if (input[1] < -0.38627535) {
                            var58 = -0.035814214;
                        } else {
                            var58 = -0.34162506;
                        }
                    }
                } else {
                    if (input[0] < -0.21273255) {
                        if (input[6] < 0.39564443) {
                            var58 = 0.30277985;
                        } else {
                            var58 = -0.27012634;
                        }
                    } else {
                        if (input[4] < 0.88870925) {
                            var58 = -0.040902257;
                        } else {
                            var58 = 0.3730056;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.30947888) {
                if (input[4] < -0.3774135) {
                    var58 = -0.108207;
                } else {
                    if (input[2] < -0.18135624) {
                        if (input[1] < -0.38491517) {
                            var58 = 0.440407;
                        } else {
                            var58 = 0.090946466;
                        }
                    } else {
                        if (input[1] < -0.4100786) {
                            var58 = 0.0579828;
                        } else {
                            var58 = -0.18292081;
                        }
                    }
                }
            } else {
                if (input[4] < -0.23893134) {
                    if (input[2] < -0.18135624) {
                        var58 = -0.3371695;
                    } else {
                        var58 = -0.1317487;
                    }
                } else {
                    if (input[1] < -0.13600154) {
                        if (input[1] < -0.17952742) {
                            var58 = -0.014463151;
                        } else {
                            var58 = -0.0033999921;
                        }
                    } else {
                        var58 = -0.13768716;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.36248282) {
            if (input[4] < -0.36350933) {
                if (input[7] < 0.7271196) {
                    if (input[1] < -0.4175596) {
                        if (input[1] < -0.41891977) {
                            var58 = -0.026773684;
                        } else {
                            var58 = 0.4750259;
                        }
                    } else {
                        if (input[1] < -0.3753939) {
                            var58 = -0.17844708;
                        } else {
                            var58 = 0.1697493;
                        }
                    }
                } else {
                    if (input[6] < -0.16797942) {
                        if (input[6] < -0.31931022) {
                            var58 = -0.017496958;
                        } else {
                            var58 = -0.14976263;
                        }
                    } else {
                        if (input[6] < 0.017391874) {
                            var58 = 0.07251169;
                        } else {
                            var58 = -0.00012186769;
                        }
                    }
                }
            } else {
                if (input[1] < -0.36995316) {
                    var58 = -0.5228081;
                } else {
                    var58 = -0.18527022;
                }
            }
        } else {
            if (input[4] < -0.35927713) {
                if (input[6] < -0.31931022) {
                    if (input[2] < -0.23563433) {
                        var58 = -0.32609236;
                    } else {
                        if (input[0] < -0.31805685) {
                            var58 = 0.48887753;
                        } else {
                            var58 = -0.08955429;
                        }
                    }
                } else {
                    if (input[6] < -0.16797942) {
                        if (input[0] < -0.29855236) {
                            var58 = 0.75453776;
                        } else {
                            var58 = 0.025613846;
                        }
                    } else {
                        if (input[6] < 0.070459716) {
                            var58 = -0.1532135;
                        } else {
                            var58 = 0.17376584;
                        }
                    }
                }
            } else {
                if (input[3] < 0.24289207) {
                    if (input[5] < 0.89645296) {
                        if (input[1] < -0.376074) {
                            var58 = -0.13746478;
                        } else {
                            var58 = 0.04165805;
                        }
                    } else {
                        if (input[6] < -0.5637625) {
                            var58 = -0.09836658;
                        } else {
                            var58 = 0.00326864;
                        }
                    }
                } else {
                    if (input[0] < -0.29855236) {
                        if (input[2] < -0.23563433) {
                            var58 = -0.010833224;
                        } else {
                            var58 = 0.12432406;
                        }
                    } else {
                        if (input[4] < 0.25714093) {
                            var58 = -0.20803449;
                        } else {
                            var58 = -0.009658515;
                        }
                    }
                }
            }
        }
    }
    var var59;
    if (input[2] < -0.25191775) {
        if (input[6] < 0.18851979) {
            if (input[6] < 0.15939334) {
                if (input[6] < 0.1420343) {
                    if (input[1] < -0.38627535) {
                        if (input[4] < -0.3884249) {
                            var59 = -0.0021545566;
                        } else {
                            var59 = -0.08449515;
                        }
                    } else {
                        if (input[1] < -0.3672328) {
                            var59 = 0.09121917;
                        } else {
                            var59 = -0.006777438;
                        }
                    }
                } else {
                    if (input[1] < -0.4093985) {
                        var59 = 0.31004986;
                    } else {
                        if (input[1] < -0.3672328) {
                            var59 = 0.027199326;
                        } else {
                            var59 = -0.037372954;
                        }
                    }
                }
            } else {
                if (input[1] < -0.42708087) {
                    var59 = -0.23439625;
                } else {
                    if (input[4] < -0.40354225) {
                        if (input[1] < -0.42232025) {
                            var59 = 0.11810162;
                        } else {
                            var59 = -0.03300476;
                        }
                    } else {
                        if (input[3] < -0.4314262) {
                            var59 = -0.16887005;
                        } else {
                            var59 = -0.033645354;
                        }
                    }
                }
            }
        } else {
            if (input[6] < 0.23643003) {
                if (input[1] < -0.41075867) {
                    if (input[0] < -0.33756137) {
                        var59 = 0.58239913;
                    } else {
                        var59 = -0.16466211;
                    }
                } else {
                    if (input[4] < -0.39682344) {
                        if (input[1] < -0.4100786) {
                            var59 = -0.032275453;
                        } else {
                            var59 = -0.33546117;
                        }
                    } else {
                        if (input[1] < -0.029907197) {
                            var59 = 0.21843095;
                        } else {
                            var59 = -0.06905402;
                        }
                    }
                }
            } else {
                if (input[3] < -0.31081644) {
                    if (input[1] < -0.398517) {
                        if (input[1] < -0.3998772) {
                            var59 = 0.004335343;
                        } else {
                            var59 = 0.2740842;
                        }
                    } else {
                        if (input[1] < -0.2910625) {
                            var59 = -0.09071823;
                        } else {
                            var59 = 0.1905625;
                        }
                    }
                } else {
                    if (input[4] < -0.28753075) {
                        if (input[6] < 0.7829106) {
                            var59 = 0.37141705;
                        } else {
                            var59 = -0.024981862;
                        }
                    } else {
                        if (input[4] < -0.24194619) {
                            var59 = -0.10101558;
                        } else {
                            var59 = -0.0010055566;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.37811425) {
            if (input[7] < 1.5832454) {
                if (input[7] < 1.4711571) {
                    if (input[1] < -0.40259758) {
                        if (input[7] < 0.8547546) {
                            var59 = 0.0019175073;
                        } else {
                            var59 = -0.0340578;
                        }
                    } else {
                        if (input[7] < 1.3185877) {
                            var59 = 0.009540102;
                        } else {
                            var59 = 0.39148626;
                        }
                    }
                } else {
                    if (input[1] < -0.4257207) {
                        if (input[7] < 1.5558425) {
                            var59 = -0.07228587;
                        } else {
                            var59 = 0.17301166;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var59 = -0.23322;
                        } else {
                            var59 = -0.0095144585;
                        }
                    }
                }
            } else {
                if (input[6] < 0.18851979) {
                    if (input[7] < 1.7161589) {
                        if (input[1] < -0.4100786) {
                            var59 = 0.41797897;
                        } else {
                            var59 = 0.035278503;
                        }
                    } else {
                        if (input[4] < -0.3889848) {
                            var59 = -0.016808905;
                        } else {
                            var59 = 0.12419798;
                        }
                    }
                } else {
                    if (input[4] < -0.35427094) {
                        if (input[1] < -0.38015452) {
                            var59 = -0.00449896;
                        } else {
                            var59 = 0.82475865;
                        }
                    } else {
                        if (input[6] < 1.2632518) {
                            var59 = -0.25827578;
                        } else {
                            var59 = -0.037000556;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.34979174) {
                if (input[3] < -0.31081644) {
                    if (input[7] < -0.06745466) {
                        if (input[7] < -0.10175492) {
                            var59 = -0.008052383;
                        } else {
                            var59 = 0.32029575;
                        }
                    } else {
                        if (input[6] < 0.45249978) {
                            var59 = -0.11816017;
                        } else {
                            var59 = 0.03243652;
                        }
                    }
                } else {
                    if (input[7] < 0.7395542) {
                        if (input[4] < -0.35927713) {
                            var59 = 0.1788384;
                        } else {
                            var59 = -0.034551106;
                        }
                    } else {
                        if (input[7] < 1.8294723) {
                            var59 = 0.77426046;
                        } else {
                            var59 = 0.024345804;
                        }
                    }
                }
            } else {
                if (input[3] < -0.40949714) {
                    if (input[6] < 0.28938338) {
                        if (input[7] < -0.88380086) {
                            var59 = -0.055100426;
                        } else {
                            var59 = 0.71389663;
                        }
                    } else {
                        var59 = -0.42589894;
                    }
                } else {
                    if (input[4] < -0.3352343) {
                        if (input[0] < -0.33756137) {
                            var59 = -0.11514516;
                        } else {
                            var59 = 0.058128852;
                        }
                    } else {
                        if (input[3] < -0.37112132) {
                            var59 = -0.17394188;
                        } else {
                            var59 = 0.0007469992;
                        }
                    }
                }
            }
        }
    }
    var var60;
    if (input[2] < -0.23563433) {
        if (input[3] < 2.2713292) {
            if (input[4] < 0.21010925) {
                if (input[4] < 0.07797262) {
                    if (input[4] < 0.06453499) {
                        if (input[1] < 1.473776) {
                            var60 = 0.0011567659;
                        } else {
                            var60 = 0.032206908;
                        }
                    } else {
                        if (input[7] < -0.78776014) {
                            var60 = 0.023953503;
                        } else {
                            var60 = -0.23937719;
                        }
                    }
                } else {
                    if (input[0] < -0.31805685) {
                        if (input[4] < 0.13620232) {
                            var60 = 0.43719333;
                        } else {
                            var60 = 0.026394365;
                        }
                    } else {
                        if (input[7] < 1.061024) {
                            var60 = 0.00028757285;
                        } else {
                            var60 = -0.37445506;
                        }
                    }
                }
            } else {
                if (input[6] < 0.6409217) {
                    if (input[7] < 0.2188206) {
                        if (input[7] < 0.03758989) {
                            var60 = -0.036198188;
                        } else {
                            var60 = 0.060079776;
                        }
                    } else {
                        if (input[7] < 1.5143926) {
                            var60 = -0.27622768;
                        } else {
                            var60 = 0.050215796;
                        }
                    }
                } else {
                    if (input[6] < 0.7405498) {
                        var60 = 0.45762786;
                    } else {
                        if (input[4] < 0.3699975) {
                            var60 = 0.07460477;
                        } else {
                            var60 = -0.07919324;
                        }
                    }
                }
            }
        } else {
            if (input[4] < 1.1574618) {
                if (input[1] < 1.3874043) {
                    if (input[6] < -0.9531228) {
                        if (input[7] < -0.5094603) {
                            var60 = -0.024779039;
                        } else {
                            var60 = 0.2346532;
                        }
                    } else {
                        if (input[6] < 1.1517857) {
                            var60 = -0.05940437;
                        } else {
                            var60 = 0.19700089;
                        }
                    }
                } else {
                    if (input[0] < 0.20856465) {
                        if (input[0] < -0.26734516) {
                            var60 = 0.13486901;
                        } else {
                            var60 = 0.6626467;
                        }
                    } else {
                        if (input[1] < 1.6104745) {
                            var60 = 0.040099356;
                        } else {
                            var60 = -0.04848018;
                        }
                    }
                }
            } else {
                if (input[6] < 0.45249978) {
                    if (input[6] < 0.41206968) {
                        if (input[6] < 0.23365818) {
                            var60 = -0.011646733;
                        } else {
                            var60 = -0.16830848;
                        }
                    } else {
                        var60 = 0.29271686;
                    }
                } else {
                    if (input[6] < 0.5132408) {
                        var60 = -0.3128808;
                    } else {
                        if (input[3] < 5.2865734) {
                            var60 = -0.07821522;
                        } else {
                            var60 = 0.074913025;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < 1.5143926) {
            if (input[4] < -0.31171846) {
                if (input[7] < 1.3185877) {
                    if (input[7] < 1.1771548) {
                        if (input[3] < -0.31081644) {
                            var60 = 0.00800149;
                        } else {
                            var60 = -0.10429571;
                        }
                    } else {
                        if (input[6] < 0.066193745) {
                            var60 = -0.06432702;
                        } else {
                            var60 = -0.37315258;
                        }
                    }
                } else {
                    if (input[3] < -0.40949714) {
                        if (input[1] < -0.36995316) {
                            var60 = 0.043510158;
                        } else {
                            var60 = -0.32393092;
                        }
                    } else {
                        var60 = 0.61077183;
                    }
                }
            } else {
                if (input[2] < -0.20849527) {
                    if (input[7] < 1.3185877) {
                        if (input[6] < -0.30643776) {
                            var60 = -0.037106268;
                        } else {
                            var60 = 0.029245283;
                        }
                    } else {
                        if (input[1] < -0.250257) {
                            var60 = -0.7045083;
                        } else {
                            var60 = -0.065518536;
                        }
                    }
                } else {
                    if (input[7] < 1.4711571) {
                        if (input[7] < 1.4277248) {
                            var60 = 0.00015219953;
                        } else {
                            var60 = 0.22021368;
                        }
                    } else {
                        if (input[4] < -0.23109274) {
                            var60 = 0.117307;
                        } else {
                            var60 = -0.26459318;
                        }
                    }
                }
            }
        } else {
            if (input[1] < 0.028580708) {
                if (input[0] < -0.31805685) {
                    if (input[7] < 2.5736654) {
                        if (input[1] < -0.40395775) {
                            var60 = -0.08384359;
                        } else {
                            var60 = -0.26364228;
                        }
                    } else {
                        if (input[1] < -0.42368042) {
                            var60 = 0.07818195;
                        } else {
                            var60 = -0.052288417;
                        }
                    }
                } else {
                    if (input[2] < -0.20849527) {
                        if (input[7] < 1.6732836) {
                            var60 = -0.19713166;
                        } else {
                            var60 = 0.21059743;
                        }
                    } else {
                        if (input[1] < -0.30466434) {
                            var60 = 0.0072235623;
                        } else {
                            var60 = -0.11277087;
                        }
                    }
                }
            } else {
                if (input[1] < 0.1387556) {
                    if (input[0] < -0.17372355) {
                        var60 = 0.53572804;
                    } else {
                        var60 = -0.08720155;
                    }
                } else {
                    if (input[6] < -1.2113086) {
                        var60 = -0.3593284;
                    } else {
                        if (input[3] < 0.7362957) {
                            var60 = 0.1969995;
                        } else {
                            var60 = -0.05413988;
                        }
                    }
                }
            }
        }
    }
    var var61;
    if (input[4] < -0.3206769) {
        if (input[4] < -0.32664916) {
            if (input[0] < -0.21273255) {
                if (input[4] < -0.3273957) {
                    if (input[4] < -0.34157985) {
                        if (input[3] < -0.34371) {
                            var61 = -0.0000048417673;
                        } else {
                            var61 = -0.030467745;
                        }
                    } else {
                        if (input[6] < 0.10158316) {
                            var61 = -0.012930725;
                        } else {
                            var61 = 0.09707497;
                        }
                    }
                } else {
                    if (input[7] < 1.8294723) {
                        if (input[7] < 0.3372331) {
                            var61 = -0.0066632847;
                        } else {
                            var61 = 0.8147699;
                        }
                    } else {
                        if (input[6] < 0.62617546) {
                            var61 = -0.2479036;
                        } else {
                            var61 = 0.05381472;
                        }
                    }
                }
            } else {
                if (input[7] < -0.011301813) {
                    if (input[6] < -0.23167802) {
                        if (input[7] < -0.63063467) {
                            var61 = 0.004705509;
                        } else {
                            var61 = -0.056615435;
                        }
                    } else {
                        if (input[4] < -0.34157985) {
                            var61 = 0.18429542;
                        } else {
                            var61 = -0.054135937;
                        }
                    }
                } else {
                    if (input[4] < -0.3324348) {
                        if (input[2] < -0.23563433) {
                            var61 = -0.07704004;
                        } else {
                            var61 = 0.19259657;
                        }
                    } else {
                        if (input[4] < -0.3273957) {
                            var61 = -0.21232764;
                        } else {
                            var61 = -0.08053985;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 0.21608664) {
                if (input[1] < -0.35091057) {
                    if (input[7] < -0.10175492) {
                        if (input[0] < -0.29855236) {
                            var61 = -0.098917104;
                        } else {
                            var61 = 0.07763577;
                        }
                    } else {
                        var61 = 0.51858085;
                    }
                } else {
                    if (input[7] < -0.20251194) {
                        if (input[0] < -0.26734516) {
                            var61 = 0.07928495;
                        } else {
                            var61 = -0.04161282;
                        }
                    } else {
                        if (input[6] < -0.25096783) {
                            var61 = -0.03512179;
                        } else {
                            var61 = -0.18824774;
                        }
                    }
                }
            } else {
                if (input[6] < 0.6924137) {
                    if (input[0] < -0.29855236) {
                        if (input[7] < 1.8906171) {
                            var61 = -0.3380975;
                        } else {
                            var61 = -0.030574743;
                        }
                    } else {
                        if (input[6] < -0.036795624) {
                            var61 = -0.07094072;
                        } else {
                            var61 = 0.19148462;
                        }
                    }
                } else {
                    if (input[1] < -0.34819022) {
                        if (input[6] < 0.7829106) {
                            var61 = 0.4933195;
                        } else {
                            var61 = 0.16551462;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var61 = -0.07006178;
                        } else {
                            var61 = -0.23805614;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.31171846) {
            if (input[3] < -0.31081644) {
                if (input[7] < -0.14663717) {
                    if (input[7] < -0.3457545) {
                        if (input[0] < -0.29855236) {
                            var61 = 0.15134957;
                        } else {
                            var61 = 0.011357292;
                        }
                    } else {
                        if (input[4] < -0.3161977) {
                            var61 = 0.16623192;
                        } else {
                            var61 = 0.40836054;
                        }
                    }
                } else {
                    if (input[7] < 0.35272354) {
                        if (input[3] < -0.34371) {
                            var61 = -0.110217676;
                        } else {
                            var61 = 0.15437703;
                        }
                    } else {
                        if (input[7] < 2.2242022) {
                            var61 = 0.12780939;
                        } else {
                            var61 = -0.22810128;
                        }
                    }
                }
            } else {
                if (input[7] < 0.5394694) {
                    if (input[7] < 0.40215626) {
                        if (input[7] < -0.052448295) {
                            var61 = -0.019489277;
                        } else {
                            var61 = -0.19227064;
                        }
                    } else {
                        var61 = 0.37439132;
                    }
                } else {
                    if (input[7] < 2.5736654) {
                        if (input[7] < 2.3104768) {
                            var61 = -0.12995513;
                        } else {
                            var61 = -0.31257567;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var61 = 0.039138295;
                        } else {
                            var61 = 0.16110964;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 1.1330545) {
                if (input[4] < -0.30779916) {
                    if (input[6] < 0.3804174) {
                        if (input[7] < -0.3922983) {
                            var61 = -0.008361018;
                        } else {
                            var61 = -0.10459635;
                        }
                    } else {
                        if (input[6] < 0.39564443) {
                            var61 = 0.19454592;
                        } else {
                            var61 = -0.020167641;
                        }
                    }
                } else {
                    if (input[7] < 0.8547546) {
                        if (input[7] < 0.81429857) {
                            var61 = 0.00085268356;
                        } else {
                            var61 = 0.2884982;
                        }
                    } else {
                        if (input[4] < -0.2680462) {
                            var61 = -0.31660712;
                        } else {
                            var61 = 0.018842662;
                        }
                    }
                }
            } else {
                if (input[4] < -0.27812442) {
                    if (input[1] < -0.26997966) {
                        if (input[6] < 0.832688) {
                            var61 = 0.06350741;
                        } else {
                            var61 = -0.19217528;
                        }
                    } else {
                        if (input[1] < -0.19040889) {
                            var61 = 0.37783745;
                        } else {
                            var61 = -0.013071747;
                        }
                    }
                } else {
                    if (input[4] < -0.2758848) {
                        if (input[7] < 2.2242022) {
                            var61 = -0.5438982;
                        } else {
                            var61 = 0.16869223;
                        }
                    } else {
                        if (input[2] < -0.18135624) {
                            var61 = 0.017609755;
                        } else {
                            var61 = -0.053941354;
                        }
                    }
                }
            }
        }
    }
    var var62;
    if (input[1] < -0.35499114) {
        if (input[1] < -0.36315224) {
            if (input[6] < -1.58365) {
                if (input[3] < -0.40949714) {
                    if (input[6] < -1.6475645) {
                        if (input[4] < -0.40130264) {
                            var62 = -0.034771413;
                        } else {
                            var62 = 0.023004578;
                        }
                    } else {
                        if (input[7] < -0.88380086) {
                            var62 = -0.0052844016;
                        } else {
                            var62 = -0.058957245;
                        }
                    }
                } else {
                    if (input[7] < -0.9061887) {
                        if (input[0] < -0.21273255) {
                            var62 = -0.03979084;
                        } else {
                            var62 = -0.010589093;
                        }
                    } else {
                        if (input[6] < -1.8854678) {
                            var62 = -0.0016004563;
                        } else {
                            var62 = -0.11981765;
                        }
                    }
                }
            } else {
                if (input[6] < -0.7920803) {
                    if (input[7] < 0.8062492) {
                        if (input[4] < -0.33859372) {
                            var62 = 0.0013531576;
                        } else {
                            var62 = 0.06404858;
                        }
                    } else {
                        if (input[6] < -1.3962598) {
                            var62 = -0.14053929;
                        } else {
                            var62 = 0.30752373;
                        }
                    }
                } else {
                    if (input[6] < -0.7141563) {
                        if (input[1] < -0.4080383) {
                            var62 = 0.044814523;
                        } else {
                            var62 = -0.08304632;
                        }
                    } else {
                        if (input[6] < -0.7021178) {
                            var62 = 0.20498212;
                        } else {
                            var62 = -0.0013013138;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 2.2242022) {
                if (input[0] < -0.33756137) {
                    if (input[4] < -0.37442738) {
                        var62 = 0.50521606;
                    } else {
                        if (input[0] < -0.34536317) {
                            var62 = -0.054582648;
                        } else {
                            var62 = 0.1643509;
                        }
                    }
                } else {
                    if (input[7] < 1.7161589) {
                        if (input[7] < 0.8547546) {
                            var62 = -0.019056655;
                        } else {
                            var62 = -0.15799615;
                        }
                    } else {
                        var62 = 0.27304712;
                    }
                }
            } else {
                if (input[3] < -0.34371) {
                    if (input[1] < -0.36043188) {
                        if (input[6] < 0.78198916) {
                            var62 = -0.48869297;
                        } else {
                            var62 = -0.049071196;
                        }
                    } else {
                        if (input[1] < -0.3577115) {
                            var62 = -0.015841914;
                        } else {
                            var62 = -0.25693655;
                        }
                    }
                } else {
                    if (input[0] < -0.34926406) {
                        var62 = 0.34613922;
                    } else {
                        if (input[0] < -0.34536317) {
                            var62 = 0.018176366;
                        } else {
                            var62 = -0.03549328;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.35091057) {
            if (input[0] < -0.34536317) {
                if (input[7] < 0.6228381) {
                    if (input[4] < -0.36591688) {
                        if (input[6] < -1.0206758) {
                            var62 = 0.31099576;
                        } else {
                            var62 = -0.07168569;
                        }
                    } else {
                        if (input[4] < -0.34307292) {
                            var62 = -0.10573815;
                        } else {
                            var62 = 0.11951692;
                        }
                    }
                } else {
                    if (input[7] < 1.8501443) {
                        var62 = 0.4373867;
                    } else {
                        var62 = 0.09848853;
                    }
                }
            } else {
                if (input[7] < 1.2230927) {
                    if (input[6] < 0.03295901) {
                        if (input[6] < -0.36445907) {
                            var62 = 0.025722267;
                        } else {
                            var62 = -0.13020931;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var62 = 0.022525223;
                        } else {
                            var62 = 0.3502863;
                        }
                    }
                } else {
                    var62 = -0.39157817;
                }
            }
        } else {
            if (input[4] < -0.37054542) {
                if (input[7] < 0.032265052) {
                    if (input[6] < -1.0279069) {
                        if (input[0] < -0.33756137) {
                            var62 = 0.023051072;
                        } else {
                            var62 = -0.0032048898;
                        }
                    } else {
                        var62 = -0.04243008;
                    }
                } else {
                    if (input[0] < -0.33756137) {
                        var62 = -0.23273252;
                    } else {
                        var62 = -0.014686418;
                    }
                }
            } else {
                if (input[1] < -0.30194396) {
                    if (input[1] < -0.30466434) {
                        if (input[7] < 1.3543984) {
                            var62 = -0.0052606384;
                        } else {
                            var62 = 0.08045676;
                        }
                    } else {
                        if (input[7] < 0.59282535) {
                            var62 = 0.1888148;
                        } else {
                            var62 = -0.16205907;
                        }
                    }
                } else {
                    if (input[7] < 1.2230927) {
                        if (input[7] < 1.1330545) {
                            var62 = 0.00003274266;
                        } else {
                            var62 = 0.10742669;
                        }
                    } else {
                        if (input[1] < -0.28834212) {
                            var62 = -0.1301929;
                        } else {
                            var62 = -0.0038539618;
                        }
                    }
                }
            }
        }
    }
    var var63;
    if (input[6] < -0.9723952) {
        if (input[3] < 0.24289207) {
            if (input[4] < 0.3545637) {
                if (input[3] < -0.009292) {
                    if (input[0] < -0.21273255) {
                        if (input[3] < -0.19568892) {
                            var63 = 0.0015618589;
                        } else {
                            var63 = 0.049901407;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var63 = 0.009932945;
                        } else {
                            var63 = -0.027479583;
                        }
                    }
                } else {
                    if (input[7] < -0.6595239) {
                        if (input[1] < -0.108797856) {
                            var63 = -0.05340087;
                        } else {
                            var63 = 0.0025257159;
                        }
                    } else {
                        if (input[1] < 0.17003983) {
                            var63 = -0.13701853;
                        } else {
                            var63 = -0.018057251;
                        }
                    }
                }
            } else {
                if (input[7] < -0.98284286) {
                    var63 = -0.014628429;
                } else {
                    var63 = 0.24658953;
                }
            }
        } else {
            if (input[1] < 0.1387556) {
                if (input[7] < -0.8641562) {
                    if (input[2] < -0.23563433) {
                        if (input[0] < -0.21273255) {
                            var63 = -0.109496474;
                        } else {
                            var63 = -0.037751723;
                        }
                    } else {
                        if (input[7] < -0.98284286) {
                            var63 = 0.0010695755;
                        } else {
                            var63 = -0.054105755;
                        }
                    }
                } else {
                    if (input[4] < 0.1809944) {
                        if (input[3] < 0.5170052) {
                            var63 = 0.37333614;
                        } else {
                            var63 = -0.1962572;
                        }
                    } else {
                        if (input[0] < 0.81710505) {
                            var63 = -0.038202688;
                        } else {
                            var63 = 0.3723354;
                        }
                    }
                }
            } else {
                if (input[2] < 0.3831359) {
                    if (input[2] < 0.16602354) {
                        if (input[2] < -0.13793376) {
                            var63 = 0.007914558;
                        } else {
                            var63 = -0.06485981;
                        }
                    } else {
                        if (input[1] < 1.1942582) {
                            var63 = -0.05456984;
                        } else {
                            var63 = 0.56890553;
                        }
                    }
                } else {
                    if (input[7] < -0.6595239) {
                        if (input[4] < 2.5460162) {
                            var63 = -0.030395947;
                        } else {
                            var63 = 0.0066667735;
                        }
                    } else {
                        if (input[6] < -1.2113086) {
                            var63 = -0.06086474;
                        } else {
                            var63 = -0.21700667;
                        }
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.9531228) {
            if (input[4] < -0.35763034) {
                if (input[1] < -0.4100786) {
                    var63 = -0.067280784;
                } else {
                    if (input[7] < -0.98284286) {
                        if (input[1] < -0.39715683) {
                            var63 = 0.005899331;
                        } else {
                            var63 = 0.027147522;
                        }
                    } else {
                        var63 = 0.24310388;
                    }
                }
            } else {
                if (input[1] < -0.1632052) {
                    if (input[2] < -0.18135624) {
                        if (input[7] < -0.98284286) {
                            var63 = 0.0005140543;
                        } else {
                            var63 = -0.11319276;
                        }
                    } else {
                        var63 = -0.26762804;
                    }
                } else {
                    if (input[7] < -0.3922983) {
                        if (input[3] < 0.7362957) {
                            var63 = -0.07676086;
                        } else {
                            var63 = 0.004339217;
                        }
                    } else {
                        if (input[1] < 1.3874043) {
                            var63 = 0.345549;
                        } else {
                            var63 = -0.08579458;
                        }
                    }
                }
            }
        } else {
            if (input[5] < 0.89645296) {
                if (input[4] < -0.40130264) {
                    if (input[7] < 1.061024) {
                        if (input[6] < -0.19405304) {
                            var63 = -0.072368704;
                        } else {
                            var63 = 0.0633362;
                        }
                    } else {
                        if (input[7] < 1.2230927) {
                            var63 = -0.27445593;
                        } else {
                            var63 = -0.061586943;
                        }
                    }
                } else {
                    if (input[1] < -0.41619942) {
                        if (input[7] < 0.71287626) {
                            var63 = 0.009946865;
                        } else {
                            var63 = 0.13523869;
                        }
                    } else {
                        if (input[1] < -0.41279894) {
                            var63 = -0.060322806;
                        } else {
                            var63 = 0.0034470803;
                        }
                    }
                }
            } else {
                if (input[6] < -0.5637625) {
                    if (input[1] < -0.33594856) {
                        if (input[1] < -0.34410965) {
                            var63 = 0.0006309365;
                        } else {
                            var63 = 0.15411997;
                        }
                    } else {
                        if (input[4] < 0.06453499) {
                            var63 = -0.06497713;
                        } else {
                            var63 = 0.0036656992;
                        }
                    }
                } else {
                    if (input[6] < -0.42728758) {
                        if (input[7] < 0.11262171) {
                            var63 = 0.019191802;
                        } else {
                            var63 = 0.11320395;
                        }
                    } else {
                        if (input[1] < -0.33186802) {
                            var63 = -0.004777256;
                        } else {
                            var63 = 0.0035716433;
                        }
                    }
                }
            }
        }
    }
    var var64;
    if (input[1] < -0.18496816) {
        if (input[1] < -0.22577366) {
            if (input[1] < -0.23801532) {
                if (input[2] < -0.20849527) {
                    if (input[4] < -0.14038877) {
                        if (input[4] < -0.23407887) {
                            var64 = 0.0036746282;
                        } else {
                            var64 = -0.03788608;
                        }
                    } else {
                        if (input[7] < -0.074516475) {
                            var64 = 0.0026966573;
                        } else {
                            var64 = 0.6084242;
                        }
                    }
                } else {
                    if (input[1] < -0.2808611) {
                        if (input[1] < -0.33186802) {
                            var64 = -0.004830649;
                        } else {
                            var64 = 0.019555243;
                        }
                    } else {
                        if (input[3] < -0.31081644) {
                            var64 = 0.19892742;
                        } else {
                            var64 = -0.050866522;
                        }
                    }
                }
            } else {
                if (input[0] < -0.26734516) {
                    if (input[6] < -0.7920803) {
                        if (input[7] < 0.122625954) {
                            var64 = -0.013733889;
                        } else {
                            var64 = 0.3568129;
                        }
                    } else {
                        if (input[4] < -0.30011326) {
                            var64 = 0.07971825;
                        } else {
                            var64 = -0.2702491;
                        }
                    }
                } else {
                    if (input[6] < -0.17199324) {
                        if (input[6] < -0.30643776) {
                            var64 = 0.05772828;
                        } else {
                            var64 = 0.42859364;
                        }
                    } else {
                        if (input[0] < 0.10714126) {
                            var64 = -0.13962239;
                        } else {
                            var64 = -0.013875427;
                        }
                    }
                }
            }
        } else {
            if (input[7] < -0.10175492) {
                if (input[2] < -0.13793376) {
                    if (input[7] < -0.6571165) {
                        if (input[7] < -0.68485934) {
                            var64 = -0.015685786;
                        } else {
                            var64 = 0.14183165;
                        }
                    } else {
                        if (input[3] < -0.19568892) {
                            var64 = -0.11938771;
                        } else {
                            var64 = -0.02319966;
                        }
                    }
                } else {
                    if (input[0] < -0.17372355) {
                        if (input[7] < -0.3457545) {
                            var64 = 0.085373886;
                        } else {
                            var64 = 0.9083105;
                        }
                    } else {
                        if (input[1] < -0.2223732) {
                            var64 = 0.5112753;
                        } else {
                            var64 = 0.009138008;
                        }
                    }
                }
            } else {
                if (input[7] < -0.074516475) {
                    if (input[0] < -0.31805685) {
                        var64 = 0.7745681;
                    } else {
                        var64 = 0.12557946;
                    }
                } else {
                    if (input[6] < 0.48636204) {
                        if (input[4] < -0.21138422) {
                            var64 = 0.03873361;
                        } else {
                            var64 = 0.20072934;
                        }
                    } else {
                        if (input[6] < 0.5872202) {
                            var64 = -0.41785198;
                        } else {
                            var64 = -0.067761324;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.18331452) {
            if (input[6] < 0.043039475) {
                if (input[0] < -0.29855236) {
                    if (input[6] < -0.39898378) {
                        if (input[4] < -0.23407887) {
                            var64 = 0.022691483;
                        } else {
                            var64 = -0.046064347;
                        }
                    } else {
                        if (input[7] < -0.19674025) {
                            var64 = -0.09115532;
                        } else {
                            var64 = 0.20743363;
                        }
                    }
                } else {
                    if (input[7] < 0.21608664) {
                        if (input[7] < 0.21016307) {
                            var64 = -0.014637466;
                        } else {
                            var64 = 0.77429575;
                        }
                    } else {
                        if (input[3] < -0.07507915) {
                            var64 = -0.042645644;
                        } else {
                            var64 = -0.2523665;
                        }
                    }
                }
            } else {
                if (input[6] < 0.6409217) {
                    if (input[5] < 0.89645296) {
                        if (input[6] < 0.25636658) {
                            var64 = -0.008671704;
                        } else {
                            var64 = -0.22281489;
                        }
                    } else {
                        if (input[1] < 0.059864935) {
                            var64 = -0.33422637;
                        } else {
                            var64 = -0.044613827;
                        }
                    }
                } else {
                    if (input[6] < 0.78198916) {
                        if (input[5] < 0.89645296) {
                            var64 = -0.020949528;
                        } else {
                            var64 = 0.4606333;
                        }
                    } else {
                        if (input[6] < 1.9575151) {
                            var64 = -0.11491885;
                        } else {
                            var64 = 0.17204778;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.1549462) {
                if (input[3] < -0.14634857) {
                    if (input[6] < 0.39564443) {
                        if (input[7] < -0.14663717) {
                            var64 = -0.042125553;
                        } else {
                            var64 = -0.21248351;
                        }
                    } else {
                        if (input[6] < 0.7535138) {
                            var64 = 0.5289659;
                        } else {
                            var64 = 0.01151489;
                        }
                    }
                } else {
                    if (input[7] < 0.6728593) {
                        if (input[7] < -0.052448295) {
                            var64 = 0.028462822;
                        } else {
                            var64 = 0.4680826;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var64 = 0.41514975;
                        } else {
                            var64 = -0.17425093;
                        }
                    }
                }
            } else {
                if (input[0] < -0.17372355) {
                    if (input[6] < 0.78198916) {
                        if (input[2] < -0.13793376) {
                            var64 = -0.006027582;
                        } else {
                            var64 = -0.066101484;
                        }
                    } else {
                        if (input[4] < 0.06453499) {
                            var64 = 0.3540637;
                        } else {
                            var64 = -0.018264892;
                        }
                    }
                } else {
                    if (input[0] < -0.048894748) {
                        if (input[4] < -0.12807095) {
                            var64 = 0.30745173;
                        } else {
                            var64 = 0.02029831;
                        }
                    } else {
                        if (input[4] < -0.11490756) {
                            var64 = -0.05131447;
                        } else {
                            var64 = 0.0016881598;
                        }
                    }
                }
            }
        }
    }
    var var65;
    if (input[4] < -0.3206769) {
        if (input[4] < -0.32664916) {
            if (input[0] < -0.21273255) {
                if (input[4] < -0.3273957) {
                    if (input[7] < -0.074516475) {
                        if (input[2] < -0.18135624) {
                            var65 = -0.008112152;
                        } else {
                            var65 = 0.05751556;
                        }
                    } else {
                        if (input[1] < -0.23393477) {
                            var65 = 0.0014521413;
                        } else {
                            var65 = 0.093270645;
                        }
                    }
                } else {
                    if (input[6] < 0.07505404) {
                        if (input[6] < -0.594532) {
                            var65 = 0.25970528;
                        } else {
                            var65 = -0.36580783;
                        }
                    } else {
                        if (input[7] < 1.8294723) {
                            var65 = 0.5233206;
                        } else {
                            var65 = -0.08813758;
                        }
                    }
                }
            } else {
                if (input[4] < -0.3684551) {
                    if (input[1] < -0.3672328) {
                        var65 = 0.4620593;
                    } else {
                        if (input[1] < -0.3658726) {
                            var65 = -0.04547278;
                        } else {
                            var65 = -0.008442039;
                        }
                    }
                } else {
                    if (input[7] < 0.81429857) {
                        if (input[7] < 0.5512693) {
                            var65 = -0.026524274;
                        } else {
                            var65 = 0.06414708;
                        }
                    } else {
                        if (input[6] < -0.04427114) {
                            var65 = -0.0950813;
                        } else {
                            var65 = -0.25171784;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 0.084374435) {
                if (input[4] < -0.3214234) {
                    if (input[6] < -0.27827838) {
                        if (input[6] < -0.34026033) {
                            var65 = 0.013543701;
                        } else {
                            var65 = 0.33990964;
                        }
                    } else {
                        if (input[7] < -0.30755648) {
                            var65 = -0.023165194;
                        } else {
                            var65 = -0.14805244;
                        }
                    }
                } else {
                    if (input[6] < -0.44490635) {
                        var65 = -0.011108369;
                    } else {
                        var65 = 0.36738047;
                    }
                }
            } else {
                if (input[1] < -0.32098654) {
                    if (input[1] < -0.34819022) {
                        if (input[6] < 0.6924137) {
                            var65 = -0.12034943;
                        } else {
                            var65 = 0.2574365;
                        }
                    } else {
                        if (input[0] < -0.33756137) {
                            var65 = -0.20264556;
                        } else {
                            var65 = 0.48264316;
                        }
                    }
                } else {
                    if (input[7] < 0.59282535) {
                        if (input[7] < 0.5394694) {
                            var65 = -0.1855549;
                        } else {
                            var65 = -0.00037453178;
                        }
                    } else {
                        if (input[6] < 0.45249978) {
                            var65 = -0.43999013;
                        } else {
                            var65 = -0.057505228;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.2602076) {
            if (input[4] < -0.2714056) {
                if (input[1] < -0.19040889) {
                    if (input[1] < -0.20129035) {
                        if (input[1] < -0.31826618) {
                            var65 = 0.014182027;
                        } else {
                            var65 = -0.012563849;
                        }
                    } else {
                        if (input[7] < -0.8277771) {
                            var65 = -0.05190813;
                        } else {
                            var65 = 0.6445536;
                        }
                    }
                } else {
                    if (input[6] < -0.59463376) {
                        if (input[7] < 0.3372331) {
                            var65 = -0.035198294;
                        } else {
                            var65 = 0.1632292;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var65 = -0.010876027;
                        } else {
                            var65 = -0.16993737;
                        }
                    }
                }
            } else {
                if (input[7] < 1.9305356) {
                    if (input[7] < 0.9725973) {
                        if (input[7] < 0.19665734) {
                            var65 = 0.045754883;
                        } else {
                            var65 = 0.18905234;
                        }
                    } else {
                        if (input[6] < -0.74489737) {
                            var65 = 0.35782462;
                        } else {
                            var65 = -0.21859287;
                        }
                    }
                } else {
                    if (input[7] < 2.3104768) {
                        var65 = 0.7037729;
                    } else {
                        if (input[0] < -0.34536317) {
                            var65 = -0.24786393;
                        } else {
                            var65 = 0.18017922;
                        }
                    }
                }
            }
        } else {
            if (input[0] < -0.33756137) {
                if (input[4] < -0.24453035) {
                    if (input[0] < -0.34926406) {
                        if (input[6] < -1.0206758) {
                            var65 = -0.11562389;
                        } else {
                            var65 = 0.48777288;
                        }
                    } else {
                        if (input[7] < -0.15652469) {
                            var65 = -0.053425636;
                        } else {
                            var65 = -0.2863335;
                        }
                    }
                } else {
                    if (input[4] < -0.18331452) {
                        if (input[4] < -0.23407887) {
                            var65 = 0.03418688;
                        } else {
                            var65 = -0.07665317;
                        }
                    } else {
                        if (input[4] < -0.1549462) {
                            var65 = 0.170273;
                        } else {
                            var65 = -0.014872427;
                        }
                    }
                }
            } else {
                if (input[7] < 0.9396391) {
                    if (input[4] < -0.25796798) {
                        if (input[7] < -0.4276074) {
                            var65 = 0.023984741;
                        } else {
                            var65 = -0.16119905;
                        }
                    } else {
                        if (input[7] < 0.90629166) {
                            var65 = 0.0007935164;
                        } else {
                            var65 = -0.088678114;
                        }
                    }
                } else {
                    if (input[0] < -0.31805685) {
                        if (input[7] < 1.1771548) {
                            var65 = 0.671997;
                        } else {
                            var65 = 0.05748261;
                        }
                    } else {
                        if (input[4] < -0.21138422) {
                            var65 = 0.07944697;
                        } else {
                            var65 = -0.030742545;
                        }
                    }
                }
            }
        }
    }
    var var66;
    if (input[6] < -0.9418565) {
        if (input[3] < -0.44513187) {
            if (input[7] < 0.1638199) {
                if (input[6] < -1.4848918) {
                    if (input[6] < -1.58365) {
                        if (input[4] < -0.40226245) {
                            var66 = -0.0325953;
                        } else {
                            var66 = 0.0034375966;
                        }
                    } else {
                        if (input[1] < -0.4175596) {
                            var66 = 0.07847511;
                        } else {
                            var66 = -0.07203396;
                        }
                    }
                } else {
                    if (input[4] < -0.39906302) {
                        if (input[7] < 0.122625954) {
                            var66 = 0.012765938;
                        } else {
                            var66 = -0.15814486;
                        }
                    } else {
                        if (input[1] < -0.4168795) {
                            var66 = -0.10020083;
                        } else {
                            var66 = 0.1335972;
                        }
                    }
                }
            } else {
                if (input[6] < -1.1231518) {
                    var66 = -0.2113259;
                } else {
                    var66 = -0.104364775;
                }
            }
        } else {
            if (input[3] < -0.34371) {
                if (input[7] < -0.011301813) {
                    if (input[4] < -0.3296353) {
                        if (input[1] < -0.3726735) {
                            var66 = -0.012682998;
                        } else {
                            var66 = 0.019400602;
                        }
                    } else {
                        if (input[7] < -0.6595239) {
                            var66 = -0.01766187;
                        } else {
                            var66 = 0.13965395;
                        }
                    }
                } else {
                    if (input[6] < -1.2959688) {
                        if (input[7] < 0.3372331) {
                            var66 = 0.15374142;
                        } else {
                            var66 = -0.10338556;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var66 = 0.046791755;
                        } else {
                            var66 = 0.39620325;
                        }
                    }
                }
            } else {
                if (input[1] < -0.30466434) {
                    if (input[6] < -1.0951631) {
                        if (input[7] < 0.6268939) {
                            var66 = -0.017334951;
                        } else {
                            var66 = 0.47353995;
                        }
                    } else {
                        if (input[7] < -0.15652469) {
                            var66 = -0.05140273;
                        } else {
                            var66 = -0.15015793;
                        }
                    }
                } else {
                    if (input[7] < 2.2086458) {
                        if (input[7] < 1.7161589) {
                            var66 = 0.005397202;
                        } else {
                            var66 = -0.12854445;
                        }
                    } else {
                        if (input[4] < -0.13702936) {
                            var66 = 0.34527424;
                        } else {
                            var66 = 0.010398746;
                        }
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.93383485) {
            if (input[3] < 1.7779255) {
                if (input[4] < 0.754333) {
                    if (input[2] < -0.18135624) {
                        if (input[4] < 0.29745382) {
                            var66 = -0.020108365;
                        } else {
                            var66 = 0.077020705;
                        }
                    } else {
                        if (input[0] < 0.42701507) {
                            var66 = -0.22359048;
                        } else {
                            var66 = -0.007962525;
                        }
                    }
                } else {
                    if (input[1] < 0.78892344) {
                        if (input[0] < -0.048894748) {
                            var66 = 0.60355026;
                        } else {
                            var66 = -0.012121082;
                        }
                    } else {
                        if (input[0] < -0.048894748) {
                            var66 = -0.18820697;
                        } else {
                            var66 = -0.0028156221;
                        }
                    }
                }
            } else {
                if (input[0] < -0.048894748) {
                    var66 = -0.38884637;
                } else {
                    var66 = 0.061356787;
                }
            }
        } else {
            if (input[3] < 0.16065814) {
                if (input[1] < 0.15779817) {
                    if (input[1] < 0.019059421) {
                        if (input[6] < -0.6802001) {
                            var66 = 0.010449448;
                        } else {
                            var66 = -0.00060471013;
                        }
                    } else {
                        if (input[6] < -0.21728392) {
                            var66 = -0.048361935;
                        } else {
                            var66 = 0.17534761;
                        }
                    }
                } else {
                    if (input[3] < -0.14634857) {
                        if (input[7] < 0.3372331) {
                            var66 = -0.028228913;
                        } else {
                            var66 = 0.51662755;
                        }
                    } else {
                        if (input[4] < -0.11490756) {
                            var66 = -0.03697034;
                        } else {
                            var66 = -0.12087816;
                        }
                    }
                }
            } else {
                if (input[4] < -0.06984124) {
                    if (input[1] < 1.473776) {
                        if (input[7] < 0.11807857) {
                            var66 = -0.038598597;
                        } else {
                            var66 = -0.14099619;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var66 = 0.29527935;
                        } else {
                            var66 = -0.026581852;
                        }
                    }
                } else {
                    if (input[4] < -0.06088283) {
                        if (input[7] < -0.36236233) {
                            var66 = 0.35692897;
                        } else {
                            var66 = 0.02655995;
                        }
                    } else {
                        if (input[1] < 0.28293508) {
                            var66 = -0.015019457;
                        } else {
                            var66 = 0.005014074;
                        }
                    }
                }
            }
        }
    }
    var var67;
    if (input[1] < 0.4679201) {
        if (input[1] < 0.28293508) {
            if (input[3] < 0.9007636) {
                if (input[1] < 0.23532864) {
                    if (input[1] < 0.15779817) {
                        if (input[1] < 0.028580708) {
                            var67 = -0.00023540598;
                        } else {
                            var67 = 0.019445611;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var67 = 0.08094057;
                        } else {
                            var67 = -0.051762763;
                        }
                    }
                } else {
                    if (input[7] < 0.59282535) {
                        if (input[7] < -0.44636536) {
                            var67 = 0.0662181;
                        } else {
                            var67 = -0.0654658;
                        }
                    } else {
                        if (input[6] < -0.5637625) {
                            var67 = 0.397738;
                        } else {
                            var67 = 0.0010922075;
                        }
                    }
                }
            } else {
                if (input[7] < -0.6595239) {
                    if (input[6] < -0.31931022) {
                        if (input[6] < -0.42728758) {
                            var67 = 0.015833043;
                        } else {
                            var67 = -0.03917985;
                        }
                    } else {
                        var67 = 0.14825408;
                    }
                } else {
                    if (input[5] < 0.89645296) {
                        var67 = -0.07498858;
                    } else {
                        var67 = -0.19860786;
                    }
                }
            }
        } else {
            if (input[4] < 0.93350136) {
                if (input[6] < 2.1701546) {
                    if (input[7] < -0.7034) {
                        if (input[7] < -0.84411055) {
                            var67 = -0.0046891826;
                        } else {
                            var67 = -0.047122207;
                        }
                    } else {
                        if (input[0] < -0.17372355) {
                            var67 = -0.017675893;
                        } else {
                            var67 = 0.071188755;
                        }
                    }
                } else {
                    var67 = 0.37857065;
                }
            } else {
                if (input[7] < -0.7464926) {
                    var67 = -0.051532533;
                } else {
                    if (input[0] < 0.10714126) {
                        var67 = -0.048360802;
                    } else {
                        if (input[1] < 0.40535164) {
                            var67 = 0.27747002;
                        } else {
                            var67 = 0.6069168;
                        }
                    }
                }
            }
        }
    } else {
        if (input[3] < 0.5170052) {
            if (input[7] < 1.3185877) {
                if (input[7] < 0.5512693) {
                    if (input[7] < 0.032265052) {
                        if (input[7] < 0.02577637) {
                            var67 = -0.013203816;
                        } else {
                            var67 = 0.3345458;
                        }
                    } else {
                        if (input[1] < 0.78892344) {
                            var67 = -0.2606143;
                        } else {
                            var67 = -0.019565864;
                        }
                    }
                } else {
                    if (input[1] < 0.5168867) {
                        if (input[0] < -0.33756137) {
                            var67 = -0.13996829;
                        } else {
                            var67 = 0.07174781;
                        }
                    } else {
                        if (input[1] < 1.1942582) {
                            var67 = 0.62716967;
                        } else {
                            var67 = 0.24810141;
                        }
                    }
                }
            } else {
                if (input[7] < 2.3104768) {
                    if (input[1] < 0.5168867) {
                        var67 = -0.055147577;
                    } else {
                        var67 = -0.32425386;
                    }
                } else {
                    var67 = 0.103925616;
                }
            }
        } else {
            if (input[7] < -0.07120625) {
                if (input[7] < -0.32756498) {
                    if (input[7] < -0.3457545) {
                        if (input[7] < -0.35257557) {
                            var67 = -0.003048639;
                        } else {
                            var67 = 0.113058135;
                        }
                    } else {
                        if (input[1] < 1.3874043) {
                            var67 = 0.0250883;
                        } else {
                            var67 = 0.7037417;
                        }
                    }
                } else {
                    if (input[4] < 0.5027508) {
                        if (input[6] < -0.42728758) {
                            var67 = -0.018774223;
                        } else {
                            var67 = 0.09690262;
                        }
                    } else {
                        if (input[1] < 1.9341983) {
                            var67 = -0.12117248;
                        } else {
                            var67 = 0.009522133;
                        }
                    }
                }
            } else {
                if (input[7] < -0.02155284) {
                    if (input[1] < 1.473776) {
                        if (input[2] < -0.13793376) {
                            var67 = 0.31566662;
                        } else {
                            var67 = -0.07243718;
                        }
                    } else {
                        if (input[4] < 1.829343) {
                            var67 = -0.15242659;
                        } else {
                            var67 = 0.03737773;
                        }
                    }
                } else {
                    if (input[2] < 1.9137781) {
                        if (input[4] < 0.6711477) {
                            var67 = 0.03359412;
                        } else {
                            var67 = -0.04115648;
                        }
                    } else {
                        if (input[0] < 2.221429) {
                            var67 = 0.5316248;
                        } else {
                            var67 = -0.022472916;
                        }
                    }
                }
            }
        }
    }
    var var68;
    if (input[6] < 0.807752) {
        if (input[6] < -0.07491647) {
            if (input[7] < 1.4711571) {
                if (input[7] < 1.061024) {
                    if (input[7] < 0.99799716) {
                        if (input[6] < -0.11035498) {
                            var68 = 0.0010581154;
                        } else {
                            var68 = 0.027120678;
                        }
                    } else {
                        if (input[4] < -0.089251146) {
                            var68 = -0.11486641;
                        } else {
                            var68 = 0.13910119;
                        }
                    }
                } else {
                    if (input[2] < -0.24648994) {
                        if (input[5] < 0.89645296) {
                            var68 = -0.10542296;
                        } else {
                            var68 = 0.026002914;
                        }
                    } else {
                        if (input[4] < -0.3840257) {
                            var68 = -0.09948919;
                        } else {
                            var68 = 0.14497264;
                        }
                    }
                }
            } else {
                if (input[4] < 0.25714093) {
                    if (input[0] < -0.33756137) {
                        if (input[3] < -0.4588375) {
                            var68 = -0.078712486;
                        } else {
                            var68 = 0.05114807;
                        }
                    } else {
                        if (input[4] < -0.38069826) {
                            var68 = -0.23273404;
                        } else {
                            var68 = -0.042214215;
                        }
                    }
                } else {
                    if (input[6] < -0.57948685) {
                        if (input[0] < -0.29855236) {
                            var68 = 0.049215432;
                        } else {
                            var68 = -0.09685581;
                        }
                    } else {
                        var68 = 0.39073452;
                    }
                }
            }
        } else {
            if (input[2] < -0.23563433) {
                if (input[6] < -0.013384028) {
                    if (input[1] < -0.4243605) {
                        if (input[1] < -0.42776096) {
                            var68 = -0.04683807;
                        } else {
                            var68 = 0.88470405;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var68 = -0.24907094;
                        } else {
                            var68 = -0.033706848;
                        }
                    }
                } else {
                    if (input[6] < 0.043039475) {
                        if (input[1] < -0.4080383) {
                            var68 = -0.06773954;
                        } else {
                            var68 = 0.13452436;
                        }
                    } else {
                        if (input[3] < -0.14634857) {
                            var68 = 0.0065637557;
                        } else {
                            var68 = -0.02506737;
                        }
                    }
                }
            } else {
                if (input[6] < 0.57522696) {
                    if (input[4] < -0.21541551) {
                        if (input[4] < -0.23109274) {
                            var68 = -0.008734396;
                        } else {
                            var68 = -0.14994606;
                        }
                    } else {
                        if (input[4] < -0.21138422) {
                            var68 = 0.1700557;
                        } else {
                            var68 = 0.0031534294;
                        }
                    }
                } else {
                    if (input[4] < -0.35763034) {
                        if (input[0] < -0.26734516) {
                            var68 = -0.007820087;
                        } else {
                            var68 = 0.68763447;
                        }
                    } else {
                        if (input[2] < -0.18135624) {
                            var68 = -0.117946394;
                        } else {
                            var68 = -0.023418166;
                        }
                    }
                }
            }
        }
    } else {
        if (input[3] < 0.5170052) {
            if (input[1] < 0.11495238) {
                if (input[1] < 0.104751006) {
                    if (input[6] < 0.89587814) {
                        if (input[3] < -0.009292) {
                            var68 = 0.009822369;
                        } else {
                            var68 = 0.18965979;
                        }
                    } else {
                        if (input[1] < -0.4080383) {
                            var68 = -0.018276036;
                        } else {
                            var68 = 0.0039052595;
                        }
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        var68 = -0.32735088;
                    } else {
                        var68 = -0.027759256;
                    }
                }
            } else {
                if (input[4] < -0.089251146) {
                    if (input[2] < -0.25191775) {
                        var68 = 0.11351491;
                    } else {
                        var68 = -0.104927115;
                    }
                } else {
                    if (input[4] < 0.06453499) {
                        if (input[7] < -0.63063467) {
                            var68 = 0.43457878;
                        } else {
                            var68 = 0.11057539;
                        }
                    } else {
                        if (input[4] < 0.3699975) {
                            var68 = -0.069338;
                        } else {
                            var68 = 0.15554073;
                        }
                    }
                }
            }
        } else {
            if (input[2] < 0.5242589) {
                if (input[0] < -0.29855236) {
                    if (input[7] < 1.8501443) {
                        if (input[0] < -0.34926406) {
                            var68 = -0.023089547;
                        } else {
                            var68 = 0.24383391;
                        }
                    } else {
                        var68 = -0.098515466;
                    }
                } else {
                    if (input[7] < -0.8641562) {
                        if (input[2] < -0.007666345) {
                            var68 = -0.056594808;
                        } else {
                            var68 = 0.19996402;
                        }
                    } else {
                        if (input[7] < 0.7271196) {
                            var68 = -0.113246724;
                        } else {
                            var68 = 0.040507846;
                        }
                    }
                }
            } else {
                if (input[2] < 1.6966656) {
                    if (input[0] < 5.498185) {
                        if (input[7] < -0.9061887) {
                            var68 = 0.05356592;
                        } else {
                            var68 = -0.055049922;
                        }
                    } else {
                        var68 = 0.45060143;
                    }
                } else {
                    if (input[1] < 3.7881289) {
                        if (input[7] < -0.8027665) {
                            var68 = -0.010953231;
                        } else {
                            var68 = 0.013320165;
                        }
                    } else {
                        if (input[0] < 7.8387256) {
                            var68 = 0.0011269033;
                        } else {
                            var68 = -0.1004792;
                        }
                    }
                }
            }
        }
    }
    var var69;
    if (input[6] < -1.7086809) {
        if (input[7] < -0.84411055) {
            if (input[3] < 0.3525373) {
                if (input[3] < -0.07507915) {
                    if (input[2] < -0.18135624) {
                        if (input[1] < 0.028580708) {
                            var69 = 0.010826031;
                        } else {
                            var69 = -0.022720732;
                        }
                    } else {
                        if (input[4] < -0.22373404) {
                            var69 = -0.054638624;
                        } else {
                            var69 = 0.006276931;
                        }
                    }
                } else {
                    if (input[6] < -1.7269256) {
                        if (input[0] < -0.21273255) {
                            var69 = -0.03590556;
                        } else {
                            var69 = -0.008930088;
                        }
                    } else {
                        if (input[4] < -0.10567491) {
                            var69 = -0.040897507;
                        } else {
                            var69 = -0.13350636;
                        }
                    }
                }
            } else {
                if (input[4] < -0.0035489667) {
                    if (input[6] < -1.8854678) {
                        if (input[4] < -0.011611541) {
                            var69 = 0.009663031;
                        } else {
                            var69 = -0.02329731;
                        }
                    } else {
                        if (input[1] < 0.63658285) {
                            var69 = -0.013527256;
                        } else {
                            var69 = 0.123622425;
                        }
                    }
                } else {
                    if (input[0] < 4.483951) {
                        if (input[7] < -0.88380086) {
                            var69 = 0.01499227;
                        } else {
                            var69 = -0.037085306;
                        }
                    } else {
                        if (input[1] < 3.6507502) {
                            var69 = -0.08800997;
                        } else {
                            var69 = -0.004412252;
                        }
                    }
                }
            }
        } else {
            if (input[5] < 0.89645296) {
                if (input[4] < 0.10753539) {
                    if (input[1] < -0.27542037) {
                        if (input[4] < -0.38637194) {
                            var69 = 0.0065522864;
                        } else {
                            var69 = -0.086172596;
                        }
                    } else {
                        if (input[2] < -0.20849527) {
                            var69 = 0.020040726;
                        } else {
                            var69 = 0.15135819;
                        }
                    }
                } else {
                    var69 = -0.13640052;
                }
            } else {
                if (input[0] < -0.26734516) {
                    var69 = -0.20912744;
                } else {
                    if (input[0] < -0.21273255) {
                        var69 = -0.015545101;
                    } else {
                        var69 = 0.04350944;
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.9418565) {
            if (input[2] < -0.13793376) {
                if (input[2] < -0.18135624) {
                    if (input[1] < -0.2992236) {
                        if (input[4] < -0.31470463) {
                            var69 = 0.003147205;
                        } else {
                            var69 = -0.051455494;
                        }
                    } else {
                        if (input[1] < -0.23257458) {
                            var69 = 0.04378917;
                        } else {
                            var69 = 0.0031017477;
                        }
                    }
                } else {
                    if (input[7] < -0.6741405) {
                        if (input[3] < 0.5170052) {
                            var69 = -0.040400773;
                        } else {
                            var69 = 0.09591631;
                        }
                    } else {
                        if (input[4] < 0.05856272) {
                            var69 = 0.16691539;
                        } else {
                            var69 = -0.12788205;
                        }
                    }
                }
            } else {
                if (input[2] < -0.061944436) {
                    if (input[7] < -0.2809543) {
                        if (input[7] < -0.48579535) {
                            var69 = -0.06712486;
                        } else {
                            var69 = 0.26305437;
                        }
                    } else {
                        if (input[7] < 2.2086458) {
                            var69 = -0.20933099;
                        } else {
                            var69 = 0.027375484;
                        }
                    }
                } else {
                    if (input[1] < 1.1942582) {
                        if (input[7] < -0.51335806) {
                            var69 = 0.0061281524;
                        } else {
                            var69 = -0.057462845;
                        }
                    } else {
                        if (input[1] < 1.3357173) {
                            var69 = 0.35474762;
                        } else {
                            var69 = 0.00042742566;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.31690598) {
                if (input[1] < -0.32098654) {
                    if (input[6] < -0.7920803) {
                        if (input[7] < -0.5640289) {
                            var69 = -0.013805096;
                        } else {
                            var69 = 0.054498468;
                        }
                    } else {
                        if (input[6] < -0.7894097) {
                            var69 = -0.074767224;
                        } else {
                            var69 = 0.00018358085;
                        }
                    }
                } else {
                    if (input[4] < -0.3352343) {
                        if (input[6] < -0.6802001) {
                            var69 = 0.19507982;
                        } else {
                            var69 = 1.0361485;
                        }
                    } else {
                        if (input[7] < 0.7395542) {
                            var69 = -0.04338124;
                        } else {
                            var69 = 0.26546252;
                        }
                    }
                }
            } else {
                if (input[4] < -0.2714056) {
                    if (input[1] < -0.29514304) {
                        if (input[6] < 0.44575542) {
                            var69 = -0.09139994;
                        } else {
                            var69 = 0.08420561;
                        }
                    } else {
                        if (input[3] < -0.40949714) {
                            var69 = -0.24206604;
                        } else {
                            var69 = -0.010750055;
                        }
                    }
                } else {
                    if (input[1] < -0.30194396) {
                        if (input[6] < 0.44575542) {
                            var69 = 0.18221672;
                        } else {
                            var69 = -0.26252717;
                        }
                    } else {
                        if (input[3] < -0.31081644) {
                            var69 = 0.06884007;
                        } else {
                            var69 = -0.00074701855;
                        }
                    }
                }
            }
        }
    }
    var var70;
    if (input[7] < 3.0238564) {
        if (input[7] < 2.4836273) {
            if (input[1] < 0.4679201) {
                if (input[1] < 0.28293508) {
                    if (input[4] < 0.1809944) {
                        if (input[4] < 0.06453499) {
                            var70 = 0.00003948508;
                        } else {
                            var70 = 0.033509105;
                        }
                    } else {
                        if (input[0] < -0.26734516) {
                            var70 = -0.082845256;
                        } else {
                            var70 = -0.0034101442;
                        }
                    }
                } else {
                    if (input[4] < 0.88870925) {
                        if (input[6] < 0.18851979) {
                            var70 = 0.020104166;
                        } else {
                            var70 = -0.042790323;
                        }
                    } else {
                        if (input[7] < -0.7464926) {
                            var70 = -0.020395862;
                        } else {
                            var70 = 0.30505297;
                        }
                    }
                }
            } else {
                if (input[7] < 1.1330545) {
                    if (input[7] < 0.6268939) {
                        if (input[7] < 0.5394694) {
                            var70 = -0.0016665356;
                        } else {
                            var70 = -0.15965435;
                        }
                    } else {
                        if (input[6] < -0.46728474) {
                            var70 = 0.285485;
                        } else {
                            var70 = 0.011294475;
                        }
                    }
                } else {
                    if (input[2] < -0.20849527) {
                        if (input[3] < 1.3393445) {
                            var70 = -0.18239594;
                        } else {
                            var70 = -0.016594036;
                        }
                    } else {
                        if (input[1] < 0.5168867) {
                            var70 = 0.31632292;
                        } else {
                            var70 = 0.016068976;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.3840257) {
                if (input[4] < -0.38637194) {
                    if (input[7] < 2.5736654) {
                        if (input[4] < -0.39906302) {
                            var70 = 0.0023056185;
                        } else {
                            var70 = -0.18270043;
                        }
                    } else {
                        if (input[4] < -0.39906302) {
                            var70 = -0.032469165;
                        } else {
                            var70 = 0.07930487;
                        }
                    }
                } else {
                    if (input[6] < 0.25509757) {
                        var70 = -0.3667647;
                    } else {
                        var70 = -0.17459096;
                    }
                }
            } else {
                if (input[1] < -0.3998772) {
                    var70 = 0.2850826;
                } else {
                    if (input[1] < -0.376074) {
                        if (input[4] < -0.3684551) {
                            var70 = -0.049461987;
                        } else {
                            var70 = -0.28591338;
                        }
                    } else {
                        if (input[3] < -0.34371) {
                            var70 = 0.09105241;
                        } else {
                            var70 = -0.004589908;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.39383727) {
            if (input[0] < -0.34536317) {
                if (input[1] < -0.41891977) {
                    if (input[6] < 0.46406695) {
                        if (input[6] < -0.33531734) {
                            var70 = -0.10921808;
                        } else {
                            var70 = 0.06977531;
                        }
                    } else {
                        if (input[6] < 1.1517857) {
                            var70 = -0.13373277;
                        } else {
                            var70 = 0.05751319;
                        }
                    }
                } else {
                    if (input[7] < 3.248952) {
                        if (input[6] < -0.33531734) {
                            var70 = 0.08446498;
                        } else {
                            var70 = -0.12388455;
                        }
                    } else {
                        var70 = 0.30756444;
                    }
                }
            } else {
                if (input[1] < -0.4175596) {
                    if (input[1] < -0.4257207) {
                        var70 = 0.21252266;
                    } else {
                        var70 = -0.0645622;
                    }
                } else {
                    var70 = 0.30877435;
                }
            }
        } else {
            if (input[3] < -0.31081644) {
                if (input[6] < 0.46406695) {
                    if (input[1] < -0.4100786) {
                        if (input[6] < 0.066193745) {
                            var70 = 0.18773003;
                        } else {
                            var70 = -0.021146584;
                        }
                    } else {
                        if (input[4] < -0.39309075) {
                            var70 = 0.172218;
                        } else {
                            var70 = -0.05283139;
                        }
                    }
                } else {
                    if (input[6] < 1.0982811) {
                        var70 = -0.16346015;
                    } else {
                        if (input[1] < -0.4100786) {
                            var70 = -0.044458844;
                        } else {
                            var70 = 0.04548463;
                        }
                    }
                }
            } else {
                if (input[1] < -0.22577366) {
                    if (input[6] < 0.48636204) {
                        if (input[1] < -0.32914764) {
                            var70 = -0.003435016;
                        } else {
                            var70 = 0.026768805;
                        }
                    } else {
                        if (input[4] < -0.2176551) {
                            var70 = 0.1892426;
                        } else {
                            var70 = 0.03984493;
                        }
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        if (input[4] < 0.25714093) {
                            var70 = -0.09216696;
                        } else {
                            var70 = -0.027993502;
                        }
                    } else {
                        if (input[1] < -0.17952742) {
                            var70 = -0.0784534;
                        } else {
                            var70 = 0.062454447;
                        }
                    }
                }
            }
        }
    }
    var var71;
    if (input[6] < 0.8608831) {
        if (input[2] < -0.13793376) {
            if (input[4] < 0.06453499) {
                if (input[3] < 0.3525373) {
                    if (input[3] < 0.16065814) {
                        if (input[4] < -0.089251146) {
                            var71 = 0.0005281874;
                        } else {
                            var71 = -0.03624506;
                        }
                    } else {
                        if (input[6] < -0.28669545) {
                            var71 = -0.0030668261;
                        } else {
                            var71 = 0.091734394;
                        }
                    }
                } else {
                    if (input[6] < -0.9723952) {
                        if (input[7] < 0.19140512) {
                            var71 = 0.011060508;
                        } else {
                            var71 = 0.29989713;
                        }
                    } else {
                        if (input[1] < 1.473776) {
                            var71 = -0.09145259;
                        } else {
                            var71 = 0.001164733;
                        }
                    }
                }
            } else {
                if (input[1] < -0.13600154) {
                    if (input[7] < -0.48579535) {
                        if (input[7] < -0.91981614) {
                            var71 = -0.026441934;
                        } else {
                            var71 = -0.10589966;
                        }
                    } else {
                        if (input[6] < -0.22045057) {
                            var71 = 0.93276256;
                        } else {
                            var71 = -0.06652546;
                        }
                    }
                } else {
                    if (input[6] < 0.23365818) {
                        if (input[6] < 0.16973469) {
                            var71 = 0.0040747644;
                        } else {
                            var71 = -0.15144217;
                        }
                    } else {
                        if (input[4] < 0.07797262) {
                            var71 = 0.47840235;
                        } else {
                            var71 = 0.048289496;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 1.4277248) {
                if (input[7] < 1.1330545) {
                    if (input[7] < 0.71287626) {
                        if (input[7] < 0.6728593) {
                            var71 = -0.004129573;
                        } else {
                            var71 = -0.35437405;
                        }
                    } else {
                        if (input[3] < -0.34371) {
                            var71 = -0.040005207;
                        } else {
                            var71 = 0.12602502;
                        }
                    }
                } else {
                    if (input[1] < -0.07615345) {
                        if (input[3] < -0.14634857) {
                            var71 = -0.09042969;
                        } else {
                            var71 = 0.22428761;
                        }
                    } else {
                        if (input[0] < -0.21273255) {
                            var71 = -0.5229869;
                        } else {
                            var71 = -0.086680695;
                        }
                    }
                }
            } else {
                if (input[7] < 1.6732836) {
                    if (input[4] < -0.27812442) {
                        var71 = 0.8007477;
                    } else {
                        if (input[1] < -0.20401073) {
                            var71 = -0.10555671;
                        } else {
                            var71 = 0.5154968;
                        }
                    }
                } else {
                    if (input[1] < -0.2223732) {
                        if (input[1] < -0.2740602) {
                            var71 = -0.023404077;
                        } else {
                            var71 = 0.31404492;
                        }
                    } else {
                        if (input[0] < 0.036925055) {
                            var71 = -0.22794504;
                        } else {
                            var71 = 0.026989462;
                        }
                    }
                }
            }
        }
    } else {
        if (input[6] < 0.89587814) {
            if (input[1] < -0.40531793) {
                if (input[2] < -0.23563433) {
                    if (input[1] < -0.41619942) {
                        if (input[1] < -0.42300034) {
                            var71 = 0.0349274;
                        } else {
                            var71 = 0.28332558;
                        }
                    } else {
                        if (input[0] < -0.29855236) {
                            var71 = -0.24910255;
                        } else {
                            var71 = -0.05226283;
                        }
                    }
                } else {
                    if (input[1] < -0.41143876) {
                        if (input[1] < -0.4168795) {
                            var71 = 0.117815554;
                        } else {
                            var71 = 0.038411904;
                        }
                    } else {
                        var71 = 0.43325046;
                    }
                }
            } else {
                if (input[4] < -0.36350933) {
                    if (input[4] < -0.37054542) {
                        if (input[1] < -0.38763556) {
                            var71 = -0.22093464;
                        } else {
                            var71 = -0.030476537;
                        }
                    } else {
                        var71 = -0.42312053;
                    }
                } else {
                    if (input[1] < -0.39715683) {
                        var71 = 0.3754729;
                    } else {
                        if (input[4] < -0.3214234) {
                            var71 = -0.09994334;
                        } else {
                            var71 = 0.008568835;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.4080383) {
                if (input[6] < 0.9187714) {
                    if (input[4] < -0.39458382) {
                        if (input[1] < -0.4257207) {
                            var71 = -0.0027138235;
                        } else {
                            var71 = 0.06786926;
                        }
                    } else {
                        if (input[1] < -0.42368042) {
                            var71 = -0.28901505;
                        } else {
                            var71 = -0.09271961;
                        }
                    }
                } else {
                    if (input[4] < -0.39010462) {
                        if (input[1] < -0.42164013) {
                            var71 = -0.0025322824;
                        } else {
                            var71 = 0.14829795;
                        }
                    } else {
                        if (input[7] < 0.8062492) {
                            var71 = -0.0024459935;
                        } else {
                            var71 = -0.14357193;
                        }
                    }
                }
            } else {
                if (input[1] < -0.40395775) {
                    if (input[2] < -0.23563433) {
                        var71 = 0.5139325;
                    } else {
                        if (input[6] < 0.9070014) {
                            var71 = -0.11066809;
                        } else {
                            var71 = 0.00020427705;
                        }
                    }
                } else {
                    if (input[3] < -0.40949714) {
                        if (input[6] < 0.9187714) {
                            var71 = 0.25665942;
                        } else {
                            var71 = -0.03255034;
                        }
                    } else {
                        if (input[4] < -0.35139146) {
                            var71 = -0.11865911;
                        } else {
                            var71 = 0.0033569292;
                        }
                    }
                }
            }
        }
    }
    var var72;
    if (input[7] < 3.0238564) {
        if (input[7] < 2.4836273) {
            if (input[6] < 0.15939334) {
                if (input[6] < 0.14970104) {
                    if (input[7] < 2.3104768) {
                        if (input[4] < -0.40690163) {
                            var72 = 0.05541401;
                        } else {
                            var72 = -0.00041884542;
                        }
                    } else {
                        if (input[4] < -0.39010462) {
                            var72 = -0.23315822;
                        } else {
                            var72 = 0.6832097;
                        }
                    }
                } else {
                    if (input[1] < -0.42368042) {
                        var72 = -0.5131024;
                    } else {
                        if (input[4] < -0.21138422) {
                            var72 = -0.08347173;
                        } else {
                            var72 = 0.04895497;
                        }
                    }
                }
            } else {
                if (input[6] < 0.16973469) {
                    if (input[2] < 0.057467364) {
                        if (input[3] < -0.4314262) {
                            var72 = 0.0028900532;
                        } else {
                            var72 = 0.16238679;
                        }
                    } else {
                        if (input[3] < -0.19568892) {
                            var72 = -0.13009098;
                        } else {
                            var72 = 0.066084;
                        }
                    }
                } else {
                    if (input[4] < -0.27812442) {
                        if (input[4] < -0.28185707) {
                            var72 = 0.0032903028;
                        } else {
                            var72 = 0.1688586;
                        }
                    } else {
                        if (input[4] < -0.23109274) {
                            var72 = -0.03356341;
                        } else {
                            var72 = 0.0010935917;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.35499114) {
                if (input[1] < -0.39307627) {
                    if (input[4] < -0.3840257) {
                        if (input[1] < -0.41891977) {
                            var72 = -0.0014069113;
                        } else {
                            var72 = -0.15743315;
                        }
                    } else {
                        if (input[4] < -0.37054542) {
                            var72 = 0.18398602;
                        } else {
                            var72 = -0.19629146;
                        }
                    }
                } else {
                    if (input[6] < 0.62617546) {
                        if (input[3] < -0.34371) {
                            var72 = -0.22096401;
                        } else {
                            var72 = 0.03820064;
                        }
                    } else {
                        if (input[1] < -0.38083464) {
                            var72 = 0.0130352145;
                        } else {
                            var72 = 0.098166354;
                        }
                    }
                }
            } else {
                if (input[1] < -0.3495504) {
                    var72 = 0.5071623;
                } else {
                    if (input[4] < -0.30276006) {
                        if (input[2] < -0.25191775) {
                            var72 = 0.093760915;
                        } else {
                            var72 = -0.18761186;
                        }
                    } else {
                        if (input[1] < -0.15300383) {
                            var72 = 0.10263137;
                        } else {
                            var72 = -0.029438203;
                        }
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.34926406) {
            if (input[1] < -0.3672328) {
                if (input[1] < -0.38083464) {
                    if (input[1] < -0.4148392) {
                        if (input[4] < -0.40130264) {
                            var72 = -0.036488503;
                        } else {
                            var72 = 0.104616866;
                        }
                    } else {
                        var72 = -0.22809097;
                    }
                } else {
                    if (input[1] < -0.37811425) {
                        if (input[1] < -0.37947443) {
                            var72 = 0.037152674;
                        } else {
                            var72 = 0.18081623;
                        }
                    } else {
                        var72 = 0.025189688;
                    }
                }
            } else {
                if (input[1] < -0.33594856) {
                    var72 = -0.18145996;
                } else {
                    if (input[1] < 0.23532864) {
                        if (input[4] < -0.31171846) {
                            var72 = 0.03130274;
                        } else {
                            var72 = -0.0013002545;
                        }
                    } else {
                        var72 = -0.049008824;
                    }
                }
            }
        } else {
            if (input[4] < -0.40018284) {
                if (input[1] < -0.42708087) {
                    if (input[6] < 1.0982811) {
                        if (input[6] < 0.9070014) {
                            var72 = 0.008157757;
                        } else {
                            var72 = -0.09399151;
                        }
                    } else {
                        var72 = 0.093585886;
                    }
                } else {
                    if (input[1] < -0.4243605) {
                        var72 = 0.32464314;
                    } else {
                        if (input[1] < -0.42027995) {
                            var72 = -0.029669238;
                        } else {
                            var72 = 0.24435268;
                        }
                    }
                }
            } else {
                if (input[1] < -0.3998772) {
                    if (input[1] < -0.40259758) {
                        if (input[6] < 1.7796307) {
                            var72 = 0.011809418;
                        } else {
                            var72 = -0.18449937;
                        }
                    } else {
                        var72 = -0.15921839;
                    }
                } else {
                    if (input[4] < -0.39458382) {
                        var72 = 0.262379;
                    } else {
                        if (input[6] < 1.7796307) {
                            var72 = 0.01203197;
                        } else {
                            var72 = 0.12876314;
                        }
                    }
                }
            }
        }
    }
    var var73;
    if (input[0] < -0.34926406) {
        if (input[1] < -0.4257207) {
            if (input[3] < -0.46431977) {
                if (input[6] < 1.7796307) {
                    if (input[6] < 1.4207525) {
                        if (input[4] < -0.40690163) {
                            var73 = -0.004006133;
                        } else {
                            var73 = 0.042555466;
                        }
                    } else {
                        if (input[7] < 1.7161589) {
                            var73 = 0.04674654;
                        } else {
                            var73 = 0.31560075;
                        }
                    }
                } else {
                    var73 = -0.18736282;
                }
            } else {
                if (input[6] < 0.78198916) {
                    if (input[6] < 0.37091032) {
                        if (input[6] < -0.28669545) {
                            var73 = -0.029557848;
                        } else {
                            var73 = 0.04169555;
                        }
                    } else {
                        var73 = 0.45741045;
                    }
                } else {
                    if (input[6] < 1.1517857) {
                        var73 = -0.3142942;
                    } else {
                        var73 = 0.1463173;
                    }
                }
            }
        } else {
            if (input[1] < -0.41619942) {
                if (input[6] < 0.8608831) {
                    if (input[1] < -0.42164013) {
                        if (input[6] < -0.5637625) {
                            var73 = 0.10205808;
                        } else {
                            var73 = -0.054148864;
                        }
                    } else {
                        if (input[7] < 2.4836273) {
                            var73 = -0.13584459;
                        } else {
                            var73 = 0.052405242;
                        }
                    }
                } else {
                    if (input[4] < -0.40018284) {
                        if (input[1] < -0.4243605) {
                            var73 = 0.04832511;
                        } else {
                            var73 = 0.3408686;
                        }
                    } else {
                        if (input[7] < 1.5832454) {
                            var73 = 0.138493;
                        } else {
                            var73 = -0.11612626;
                        }
                    }
                }
            } else {
                if (input[1] < -0.4148392) {
                    if (input[4] < -0.39458382) {
                        if (input[6] < 0.78198916) {
                            var73 = -0.060280778;
                        } else {
                            var73 = 0.80870295;
                        }
                    } else {
                        if (input[6] < 0.78198916) {
                            var73 = 0.25874546;
                        } else {
                            var73 = -0.21353331;
                        }
                    }
                } else {
                    if (input[6] < 0.8608831) {
                        if (input[4] < -0.32664916) {
                            var73 = 0.01937816;
                        } else {
                            var73 = -0.020977512;
                        }
                    } else {
                        if (input[4] < -0.35576403) {
                            var73 = -0.25115186;
                        } else {
                            var73 = 0.0040901084;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.4257207) {
            if (input[6] < 0.62617546) {
                if (input[6] < 0.3804174) {
                    if (input[7] < 0.8547546) {
                        if (input[6] < 0.017391874) {
                            var73 = 0.0050680046;
                        } else {
                            var73 = -0.08954208;
                        }
                    } else {
                        if (input[7] < 1.4711571) {
                            var73 = 0.08758295;
                        } else {
                            var73 = -0.02181484;
                        }
                    }
                } else {
                    if (input[2] < -0.25191775) {
                        if (input[4] < -0.40690163) {
                            var73 = 0.094852105;
                        } else {
                            var73 = -0.16347042;
                        }
                    } else {
                        if (input[7] < 1.9305356) {
                            var73 = 0.124181725;
                        } else {
                            var73 = 0.012726184;
                        }
                    }
                }
            } else {
                if (input[6] < 0.7594882) {
                    if (input[6] < 0.7405498) {
                        if (input[6] < 0.6924137) {
                            var73 = -0.12077447;
                        } else {
                            var73 = 0.07420347;
                        }
                    } else {
                        var73 = -0.49320313;
                    }
                } else {
                    if (input[7] < 0.99799716) {
                        if (input[1] < -0.42708087) {
                            var73 = -0.0021621382;
                        } else {
                            var73 = -0.07388836;
                        }
                    } else {
                        if (input[1] < -0.42776096) {
                            var73 = 0.002474719;
                        } else {
                            var73 = 0.08293729;
                        }
                    }
                }
            }
        } else {
            if (input[3] < -0.4588375) {
                if (input[2] < -0.24648994) {
                    if (input[6] < 0.8608831) {
                        if (input[6] < 0.3804174) {
                            var73 = 0.033889543;
                        } else {
                            var73 = -0.07101147;
                        }
                    } else {
                        var73 = 0.46426114;
                    }
                } else {
                    if (input[7] < 0.3372331) {
                        if (input[6] < -1.191112) {
                            var73 = -0.019480564;
                        } else {
                            var73 = -0.1000964;
                        }
                    } else {
                        if (input[6] < 0.25509757) {
                            var73 = 0.27751142;
                        } else {
                            var73 = 0.87582004;
                        }
                    }
                }
            } else {
                if (input[7] < 1.8501443) {
                    if (input[7] < 0.8547546) {
                        if (input[7] < 0.8062492) {
                            var73 = 0.00022276964;
                        } else {
                            var73 = 0.03465873;
                        }
                    } else {
                        if (input[7] < 0.88544947) {
                            var73 = -0.19246574;
                        } else {
                            var73 = -0.0013129509;
                        }
                    }
                } else {
                    if (input[4] < -0.3777868) {
                        if (input[0] < -0.29855236) {
                            var73 = -0.025223613;
                        } else {
                            var73 = 0.4259427;
                        }
                    } else {
                        if (input[4] < -0.376667) {
                            var73 = 0.4089013;
                        } else {
                            var73 = 0.020398874;
                        }
                    }
                }
            }
        }
    }
    var var74;
    if (input[0] < 0.54404205) {
        if (input[4] < 1.5157983) {
            if (input[4] < 1.2170912) {
                if (input[3] < 3.6418948) {
                    if (input[1] < 0.028580708) {
                        if (input[3] < 0.16065814) {
                            var74 = 0.00021234974;
                        } else {
                            var74 = -0.04982504;
                        }
                    } else {
                        if (input[2] < -0.20849527) {
                            var74 = -0.0038656956;
                        } else {
                            var74 = 0.03138716;
                        }
                    }
                } else {
                    if (input[0] < -0.26734516) {
                        if (input[0] < -0.29855236) {
                            var74 = -0.08068922;
                        } else {
                            var74 = 0.024362577;
                        }
                    } else {
                        var74 = -0.3690036;
                    }
                }
            } else {
                if (input[6] < 0.45249978) {
                    if (input[6] < 0.16973469) {
                        if (input[6] < -0.73580486) {
                            var74 = 0.11121714;
                        } else {
                            var74 = -0.047841687;
                        }
                    } else {
                        if (input[0] < -0.12691276) {
                            var74 = 0.47976577;
                        } else {
                            var74 = -0.029142024;
                        }
                    }
                } else {
                    if (input[7] < 0.54780626) {
                        if (input[3] < 4.464234) {
                            var74 = -0.21898812;
                        } else {
                            var74 = -0.042355873;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var74 = -0.019087851;
                        } else {
                            var74 = 0.0010690213;
                        }
                    }
                }
            }
        } else {
            if (input[1] < 2.524518) {
                if (input[2] < 0.16602354) {
                    if (input[0] < -0.29855236) {
                        if (input[6] < -0.31931022) {
                            var74 = 0.03241842;
                        } else {
                            var74 = -0.13027692;
                        }
                    } else {
                        if (input[7] < -0.6151869) {
                            var74 = -0.05039433;
                        } else {
                            var74 = -0.32272407;
                        }
                    }
                } else {
                    if (input[6] < -1.1579646) {
                        var74 = 0.59849256;
                    } else {
                        if (input[6] < 0.22764193) {
                            var74 = 0.1202246;
                        } else {
                            var74 = -0.1302326;
                        }
                    }
                }
            } else {
                if (input[0] < -0.048894748) {
                    if (input[0] < -0.17372355) {
                        if (input[7] < -0.5640289) {
                            var74 = 0.1403277;
                        } else {
                            var74 = -0.0020565137;
                        }
                    } else {
                        if (input[7] < -0.6961423) {
                            var74 = -0.022775574;
                        } else {
                            var74 = 0.37923026;
                        }
                    }
                } else {
                    if (input[4] < 2.3638618) {
                        if (input[3] < 5.2865734) {
                            var74 = -0.0320355;
                        } else {
                            var74 = -0.1221125;
                        }
                    } else {
                        if (input[6] < -0.62621254) {
                            var74 = 0.1076711;
                        } else {
                            var74 = -0.032345742;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.088395104) {
            if (input[7] < -0.5476583) {
                if (input[1] < -0.108797856) {
                    if (input[7] < -0.63063467) {
                        if (input[2] < -0.24648994) {
                            var74 = -0.06894383;
                        } else {
                            var74 = 0.0010054776;
                        }
                    } else {
                        if (input[6] < -1.191112) {
                            var74 = 0.15506633;
                        } else {
                            var74 = 0.0052553415;
                        }
                    }
                } else {
                    if (input[2] < -0.18135624) {
                        if (input[2] < -0.24648994) {
                            var74 = 0.029575683;
                        } else {
                            var74 = 0.3052555;
                        }
                    } else {
                        var74 = -0.07587435;
                    }
                }
            } else {
                if (input[1] < -0.108797856) {
                    var74 = 0.27809203;
                } else {
                    var74 = -0.13205881;
                }
            }
        } else {
            if (input[3] < 0.24289207) {
                if (input[6] < -0.7698551) {
                    if (input[1] < -0.029907197) {
                        var74 = 0.13566974;
                    } else {
                        if (input[4] < -0.06984124) {
                            var74 = 0.0256122;
                        } else {
                            var74 = -0.05582262;
                        }
                    }
                } else {
                    if (input[6] < -0.25096783) {
                        if (input[2] < 0.3831359) {
                            var74 = -0.14439552;
                        } else {
                            var74 = -0.031166323;
                        }
                    } else {
                        if (input[2] < -0.20849527) {
                            var74 = 0.054907843;
                        } else {
                            var74 = -0.07703029;
                        }
                    }
                }
            } else {
                if (input[7] < -0.2561061) {
                    if (input[1] < 0.78892344) {
                        if (input[4] < 0.88870925) {
                            var74 = -0.0017379007;
                        } else {
                            var74 = 0.02855308;
                        }
                    } else {
                        if (input[1] < 0.9303826) {
                            var74 = -0.057835862;
                        } else {
                            var74 = -0.0033995444;
                        }
                    }
                } else {
                    if (input[3] < 1.3393445) {
                        if (input[2] < -0.13793376) {
                            var74 = 0.0332086;
                        } else {
                            var74 = -0.07591653;
                        }
                    } else {
                        if (input[1] < 2.1885526) {
                            var74 = 0.13926408;
                        } else {
                            var74 = -0.050579727;
                        }
                    }
                }
            }
        }
    }
    var var75;
    if (input[2] < -0.23563433) {
        if (input[4] < -0.3206769) {
            if (input[0] < -0.29855236) {
                if (input[6] < -0.5313167) {
                    if (input[4] < -0.3884249) {
                        if (input[1] < -0.42232025) {
                            var75 = -0.023479128;
                        } else {
                            var75 = 0.024886528;
                        }
                    } else {
                        if (input[6] < -1.0206758) {
                            var75 = 0.010856741;
                        } else {
                            var75 = -0.048123866;
                        }
                    }
                } else {
                    if (input[4] < -0.39010462) {
                        if (input[4] < -0.39309075) {
                            var75 = -0.0008294954;
                        } else {
                            var75 = -0.07932106;
                        }
                    } else {
                        if (input[6] < 0.18104404) {
                            var75 = 0.046370786;
                        } else {
                            var75 = 0.0024739786;
                        }
                    }
                }
            } else {
                if (input[7] < 0.21016307) {
                    if (input[4] < -0.34979174) {
                        if (input[7] < 0.19140512) {
                            var75 = 0.0022688063;
                        } else {
                            var75 = 0.13696112;
                        }
                    } else {
                        if (input[6] < 0.39564443) {
                            var75 = -0.029523397;
                        } else {
                            var75 = 0.083901085;
                        }
                    }
                } else {
                    if (input[6] < 0.48636204) {
                        if (input[1] < -0.30602452) {
                            var75 = -0.072174035;
                        } else {
                            var75 = -0.22186033;
                        }
                    } else {
                        if (input[4] < -0.35352442) {
                            var75 = 0.20968433;
                        } else {
                            var75 = -0.1305876;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.32914764) {
                if (input[3] < -0.34371) {
                    if (input[6] < 0.6409217) {
                        var75 = 0.69553447;
                    } else {
                        var75 = 0.012884474;
                    }
                } else {
                    if (input[1] < -0.33594856) {
                        if (input[2] < -0.24648994) {
                            var75 = 0.0576792;
                        } else {
                            var75 = -0.06780128;
                        }
                    } else {
                        if (input[0] < -0.26734516) {
                            var75 = 0.0068324897;
                        } else {
                            var75 = 0.5300243;
                        }
                    }
                }
            } else {
                if (input[1] < -0.30466434) {
                    if (input[6] < 0.17173328) {
                        if (input[7] < -0.44636536) {
                            var75 = -0.01590361;
                        } else {
                            var75 = -0.19260825;
                        }
                    } else {
                        if (input[7] < -0.50263923) {
                            var75 = 0.4552515;
                        } else {
                            var75 = 0.023757068;
                        }
                    }
                } else {
                    if (input[1] < -0.23801532) {
                        if (input[6] < 0.18104404) {
                            var75 = 0.052421145;
                        } else {
                            var75 = -0.0367752;
                        }
                    } else {
                        if (input[7] < 1.8294723) {
                            var75 = 0.004650088;
                        } else {
                            var75 = -0.0586392;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < 0.9396391) {
            if (input[7] < 0.88544947) {
                if (input[7] < 0.59282535) {
                    if (input[7] < 0.25839782) {
                        if (input[7] < 0.19665734) {
                            var75 = -0.00049715803;
                        } else {
                            var75 = -0.040412918;
                        }
                    } else {
                        if (input[7] < 0.29901654) {
                            var75 = 0.14992669;
                        } else {
                            var75 = 0.011294903;
                        }
                    }
                } else {
                    if (input[0] < -0.17372355) {
                        if (input[1] < -0.38015452) {
                            var75 = -0.05680515;
                        } else {
                            var75 = 0.07203807;
                        }
                    } else {
                        if (input[3] < -0.31081644) {
                            var75 = 0.10627135;
                        } else {
                            var75 = -0.21308213;
                        }
                    }
                }
            } else {
                if (input[1] < -0.4100786) {
                    if (input[0] < -0.29855236) {
                        if (input[6] < -0.552997) {
                            var75 = -0.11450197;
                        } else {
                            var75 = 0.08648767;
                        }
                    } else {
                        if (input[6] < -0.27827838) {
                            var75 = -0.6017967;
                        } else {
                            var75 = -0.076556414;
                        }
                    }
                } else {
                    if (input[1] < -0.36995316) {
                        if (input[1] < -0.40395775) {
                            var75 = 0.10172616;
                        } else {
                            var75 = 0.42164645;
                        }
                    } else {
                        if (input[4] < -0.17734224) {
                            var75 = -0.07052205;
                        } else {
                            var75 = 0.18774942;
                        }
                    }
                }
            }
        } else {
            if (input[6] < -0.40693426) {
                if (input[2] < -0.061944436) {
                    if (input[7] < 1.5558425) {
                        if (input[4] < -0.089251146) {
                            var75 = -0.19503935;
                        } else {
                            var75 = -0.0022330675;
                        }
                    } else {
                        if (input[1] < -0.41143876) {
                            var75 = -0.31719515;
                        } else {
                            var75 = 0.07682772;
                        }
                    }
                } else {
                    if (input[6] < -0.7021178) {
                        if (input[2] < -0.007666345) {
                            var75 = 0.5851796;
                        } else {
                            var75 = 0.1362392;
                        }
                    } else {
                        if (input[1] < -0.2740602) {
                            var75 = 0.05176231;
                        } else {
                            var75 = -0.035072174;
                        }
                    }
                }
            } else {
                if (input[6] < -0.23778434) {
                    if (input[1] < -0.40531793) {
                        if (input[1] < -0.42368042) {
                            var75 = -0.041492987;
                        } else {
                            var75 = -0.23728853;
                        }
                    } else {
                        if (input[2] < -0.18135624) {
                            var75 = 0.5344677;
                        } else {
                            var75 = -0.031371742;
                        }
                    }
                } else {
                    if (input[1] < -0.38967583) {
                        if (input[6] < 0.13940509) {
                            var75 = 0.062069062;
                        } else {
                            var75 = -0.04006069;
                        }
                    } else {
                        if (input[3] < -0.37112132) {
                            var75 = -0.20692246;
                        } else {
                            var75 = -0.016675783;
                        }
                    }
                }
            }
        }
    }
    var var76;
    if (input[7] < -0.011301813) {
        if (input[7] < -0.052448295) {
            if (input[3] < 1.3393445) {
                if (input[3] < 0.9007636) {
                    if (input[0] < 1.3632311) {
                        if (input[4] < 1.2170912) {
                            var76 = -0.0004637608;
                        } else {
                            var76 = 0.057141405;
                        }
                    } else {
                        if (input[1] < 0.7277152) {
                            var76 = 0.0060914676;
                        } else {
                            var76 = 0.19713733;
                        }
                    }
                } else {
                    if (input[7] < -0.5476583) {
                        if (input[7] < -0.6595239) {
                            var76 = -0.004890465;
                        } else {
                            var76 = -0.11949048;
                        }
                    } else {
                        if (input[7] < -0.3457545) {
                            var76 = 0.3156466;
                        } else {
                            var76 = 0.044150095;
                        }
                    }
                }
            } else {
                if (input[0] < 0.036925055) {
                    if (input[1] < 1.3357173) {
                        if (input[0] < -0.31805685) {
                            var76 = -0.0034635824;
                        } else {
                            var76 = -0.103863545;
                        }
                    } else {
                        if (input[6] < -0.14240721) {
                            var76 = -0.019547801;
                        } else {
                            var76 = 0.057955466;
                        }
                    }
                } else {
                    if (input[0] < 0.10714126) {
                        if (input[2] < -0.18135624) {
                            var76 = -0.07238824;
                        } else {
                            var76 = 0.6190164;
                        }
                    } else {
                        if (input[2] < -0.061944436) {
                            var76 = 0.019099083;
                        } else {
                            var76 = -0.013738506;
                        }
                    }
                }
            }
        } else {
            if (input[4] < 0.19741817) {
                if (input[4] < -0.042965997) {
                    if (input[4] < -0.06088283) {
                        if (input[1] < -0.39443648) {
                            var76 = -0.066424906;
                        } else {
                            var76 = -0.0040365327;
                        }
                    } else {
                        if (input[0] < -0.048894748) {
                            var76 = 0.43393263;
                        } else {
                            var76 = -0.10203437;
                        }
                    }
                } else {
                    if (input[7] < -0.02155284) {
                        if (input[6] < -0.25096783) {
                            var76 = -0.173794;
                        } else {
                            var76 = -0.33436817;
                        }
                    } else {
                        if (input[1] < 0.43255532) {
                            var76 = 0.1615218;
                        } else {
                            var76 = -0.23602933;
                        }
                    }
                }
            } else {
                if (input[4] < 0.34224588) {
                    if (input[7] < -0.025550095) {
                        if (input[0] < -0.17372355) {
                            var76 = 0.7681892;
                        } else {
                            var76 = 0.11258015;
                        }
                    } else {
                        if (input[1] < 0.7277152) {
                            var76 = 0.15046687;
                        } else {
                            var76 = -0.09039413;
                        }
                    }
                } else {
                    if (input[4] < 0.45621684) {
                        if (input[0] < -0.17372355) {
                            var76 = -0.3320807;
                        } else {
                            var76 = 0.15102068;
                        }
                    } else {
                        if (input[0] < -0.21273255) {
                            var76 = 0.34961087;
                        } else {
                            var76 = -0.029532397;
                        }
                    }
                }
            }
        }
    } else {
        if (input[2] < 0.99105054) {
            if (input[0] < 0.54404205) {
                if (input[1] < 2.524518) {
                    if (input[3] < 0.9007636) {
                        if (input[4] < 0.5027508) {
                            var76 = 0.0018248875;
                        } else {
                            var76 = 0.22370933;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var76 = 0.0075239697;
                        } else {
                            var76 = -0.07792497;
                        }
                    }
                } else {
                    if (input[7] < 0.5394694) {
                        if (input[7] < 0.40215626) {
                            var76 = 0.054171037;
                        } else {
                            var76 = 0.25057092;
                        }
                    } else {
                        if (input[7] < 0.9725973) {
                            var76 = -0.13099775;
                        } else {
                            var76 = 0.052455742;
                        }
                    }
                }
            } else {
                if (input[2] < -0.13793376) {
                    if (input[4] < 0.5691924) {
                        if (input[4] < 0.07797262) {
                            var76 = 0.147393;
                        } else {
                            var76 = -0.10790793;
                        }
                    } else {
                        if (input[3] < 0.62665045) {
                            var76 = 0.81149757;
                        } else {
                            var76 = 0.01694646;
                        }
                    }
                } else {
                    if (input[0] < 1.3632311) {
                        if (input[4] < 0.7259647) {
                            var76 = -0.1554424;
                        } else {
                            var76 = -0.2882364;
                        }
                    } else {
                        if (input[1] < 0.36182573) {
                            var76 = -0.10560083;
                        } else {
                            var76 = 0.016830012;
                        }
                    }
                }
            }
        } else {
            if (input[3] < 1.7779255) {
                if (input[2] < 1.1538848) {
                    var76 = 0.39483985;
                } else {
                    if (input[1] < 0.43255532) {
                        if (input[1] < 0.28293508) {
                            var76 = 0.0067415778;
                        } else {
                            var76 = 0.3635745;
                        }
                    } else {
                        if (input[3] < 1.3393445) {
                            var76 = -0.22021736;
                        } else {
                            var76 = 0.05901587;
                        }
                    }
                }
            } else {
                if (input[1] < 1.9341983) {
                    if (input[6] < -0.30643776) {
                        var76 = 0.22031848;
                    } else {
                        var76 = 0.8631405;
                    }
                } else {
                    if (input[7] < 0.12012489) {
                        if (input[0] < 1.5972852) {
                            var76 = 0.09088974;
                        } else {
                            var76 = -0.084566444;
                        }
                    } else {
                        if (input[6] < -0.17199324) {
                            var76 = -0.30610526;
                        } else {
                            var76 = -0.0024459602;
                        }
                    }
                }
            }
        }
    }
    var var77;
    if (input[6] < -1.7086809) {
        if (input[3] < 0.9007636) {
            if (input[7] < -0.5640289) {
                if (input[1] < 0.9303826) {
                    if (input[1] < -0.26997966) {
                        if (input[7] < -0.8641562) {
                            var77 = -0.003821405;
                        } else {
                            var77 = -0.055341743;
                        }
                    } else {
                        if (input[7] < -0.70629704) {
                            var77 = -0.00720226;
                        } else {
                            var77 = 0.092408344;
                        }
                    }
                } else {
                    if (input[7] < -0.8641562) {
                        if (input[7] < -0.91981614) {
                            var77 = -0.014331002;
                        } else {
                            var77 = 0.07389087;
                        }
                    } else {
                        var77 = -0.11915614;
                    }
                }
            } else {
                if (input[1] < 0.43255532) {
                    if (input[1] < -0.088395104) {
                        if (input[0] < -0.29855236) {
                            var77 = -0.07366743;
                        } else {
                            var77 = 0.1327464;
                        }
                    } else {
                        var77 = -0.15009272;
                    }
                } else {
                    var77 = 0.07785111;
                }
            }
        } else {
            if (input[4] < 0.0033191522) {
                if (input[7] < -0.98284286) {
                    if (input[6] < -2.0045147) {
                        var77 = -0.01179024;
                    } else {
                        var77 = 0.0059644883;
                    }
                } else {
                    var77 = 0.16723979;
                }
            } else {
                if (input[0] < 4.483951) {
                    if (input[1] < 1.6104745) {
                        if (input[1] < 0.78892344) {
                            var77 = -0.01172939;
                        } else {
                            var77 = 0.052887384;
                        }
                    } else {
                        if (input[7] < -0.91981614) {
                            var77 = 0.009940079;
                        } else {
                            var77 = -0.027473144;
                        }
                    }
                } else {
                    if (input[1] < 3.6507502) {
                        var77 = -0.06751601;
                    } else {
                        var77 = -0.00020631553;
                    }
                }
            }
        }
    } else {
        if (input[1] < 3.7881289) {
            if (input[1] < 2.524518) {
                if (input[1] < 2.0158093) {
                    if (input[1] < 1.7886586) {
                        if (input[4] < 1.3814222) {
                            var77 = 0.00054336095;
                        } else {
                            var77 = -0.011337167;
                        }
                    } else {
                        if (input[7] < -0.19674025) {
                            var77 = -0.021742512;
                        } else {
                            var77 = 0.09656299;
                        }
                    }
                } else {
                    if (input[7] < -0.5367446) {
                        if (input[7] < -0.5476583) {
                            var77 = 0.0080972565;
                        } else {
                            var77 = 0.37699264;
                        }
                    } else {
                        if (input[3] < 3.6418948) {
                            var77 = -0.1023099;
                        } else {
                            var77 = -0.032069;
                        }
                    }
                }
            } else {
                if (input[6] < -0.76093256) {
                    if (input[5] < 0.89645296) {
                        if (input[3] < 0.62665045) {
                            var77 = 0.12968464;
                        } else {
                            var77 = -0.0050270543;
                        }
                    } else {
                        if (input[3] < 4.464234) {
                            var77 = 0.086227246;
                        } else {
                            var77 = 0.40964997;
                        }
                    }
                } else {
                    if (input[6] < -0.73580486) {
                        var77 = -0.19662319;
                    } else {
                        if (input[0] < -0.31805685) {
                            var77 = 0.07039195;
                        } else {
                            var77 = -0.016727831;
                        }
                    }
                }
            }
        } else {
            if (input[4] < 1.3814222) {
                if (input[7] < -0.5476583) {
                    if (input[7] < -0.5640289) {
                        if (input[6] < -1.6299307) {
                            var77 = 0.059713878;
                        } else {
                            var77 = -0.0127641605;
                        }
                    } else {
                        if (input[0] < -0.26734516) {
                            var77 = 0.22372371;
                        } else {
                            var77 = 0.0015612127;
                        }
                    }
                } else {
                    if (input[7] < -0.06258773) {
                        if (input[3] < 1.7779255) {
                            var77 = -0.07462898;
                        } else {
                            var77 = -0.13595054;
                        }
                    } else {
                        if (input[6] < 0.017391874) {
                            var77 = 0.0148479;
                        } else {
                            var77 = -0.10272703;
                        }
                    }
                }
            } else {
                if (input[0] < -0.31805685) {
                    if (input[7] < -0.074516475) {
                        if (input[0] < -0.33756137) {
                            var77 = -0.10084975;
                        } else {
                            var77 = 0.015589393;
                        }
                    } else {
                        if (input[7] < 0.71287626) {
                            var77 = 0.28439477;
                        } else {
                            var77 = 0.080507115;
                        }
                    }
                } else {
                    if (input[7] < 0.35272354) {
                        if (input[4] < 1.5157983) {
                            var77 = 0.07806479;
                        } else {
                            var77 = 0.00522818;
                        }
                    } else {
                        if (input[2] < -0.24648994) {
                            var77 = 0.04303451;
                        } else {
                            var77 = -0.16850992;
                        }
                    }
                }
            }
        }
    }
    var var78;
    if (input[0] < -0.34926406) {
        if (input[1] < 0.104751006) {
            if (input[1] < -0.22577366) {
                if (input[1] < -0.250257) {
                    if (input[4] < -0.25050265) {
                        if (input[3] < -0.19568892) {
                            var78 = -0.0074904826;
                        } else {
                            var78 = -0.17353192;
                        }
                    } else {
                        if (input[1] < -0.26997966) {
                            var78 = 0.22116439;
                        } else {
                            var78 = -0.102675445;
                        }
                    }
                } else {
                    if (input[7] < 1.8915579) {
                        if (input[3] < -0.14634857) {
                            var78 = 0.57616585;
                        } else {
                            var78 = 0.0323336;
                        }
                    } else {
                        if (input[4] < -0.3296353) {
                            var78 = -0.19596232;
                        } else {
                            var78 = 0.1900509;
                        }
                    }
                }
            } else {
                if (input[7] < 2.3132608) {
                    if (input[3] < -0.2559938) {
                        if (input[1] < -0.1632052) {
                            var78 = 0.08233066;
                        } else {
                            var78 = -0.032523394;
                        }
                    } else {
                        if (input[1] < -0.19448943) {
                            var78 = -0.26321623;
                        } else {
                            var78 = -0.11717758;
                        }
                    }
                } else {
                    if (input[1] < -0.17136632) {
                        if (input[3] < -0.07507915) {
                            var78 = -0.16772383;
                        } else {
                            var78 = 0.62264216;
                        }
                    } else {
                        if (input[1] < -0.11695896) {
                            var78 = -0.008796144;
                        } else {
                            var78 = -0.102370314;
                        }
                    }
                }
            }
        } else {
            if (input[3] < -0.07507915) {
                if (input[6] < -1.0206758) {
                    if (input[1] < 0.23532864) {
                        var78 = 0.43572125;
                    } else {
                        var78 = 0.08054534;
                    }
                } else {
                    var78 = 0.007517955;
                }
            } else {
                if (input[4] < -0.22101451) {
                    var78 = -0.27615702;
                } else {
                    if (input[6] < -0.83312756) {
                        if (input[1] < 1.7886586) {
                            var78 = 0.0019485643;
                        } else {
                            var78 = 0.13608076;
                        }
                    } else {
                        if (input[4] < 0.06453499) {
                            var78 = -0.17688154;
                        } else {
                            var78 = 0.005472912;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.40578184) {
            if (input[1] < -0.42708087) {
                if (input[6] < 0.6924137) {
                    if (input[6] < 0.18851979) {
                        if (input[6] < -0.594532) {
                            var78 = -0.025792342;
                        } else {
                            var78 = -0.16747281;
                        }
                    } else {
                        if (input[6] < 0.22764193) {
                            var78 = 0.17008978;
                        } else {
                            var78 = -0.015110732;
                        }
                    }
                } else {
                    var78 = 0.35098377;
                }
            } else {
                if (input[7] < -0.63063467) {
                    if (input[4] < -0.40690163) {
                        var78 = 0.08070488;
                    } else {
                        var78 = 0.01902355;
                    }
                } else {
                    var78 = -0.2408125;
                }
            }
        } else {
            if (input[7] < 3.0238564) {
                if (input[7] < -0.50263923) {
                    if (input[7] < -0.51335806) {
                        if (input[1] < -0.42776096) {
                            var78 = 0.03365317;
                        } else {
                            var78 = -0.0010031371;
                        }
                    } else {
                        if (input[1] < -0.30602452) {
                            var78 = -0.0079765;
                        } else {
                            var78 = -0.10390495;
                        }
                    }
                } else {
                    if (input[0] < 0.036925055) {
                        if (input[2] < 0.16602354) {
                            var78 = 0.0019403041;
                        } else {
                            var78 = 0.042533875;
                        }
                    } else {
                        if (input[4] < 0.48558053) {
                            var78 = -0.016157363;
                        } else {
                            var78 = 0.0087864;
                        }
                    }
                }
            } else {
                if (input[4] < -0.40018284) {
                    if (input[1] < -0.42027995) {
                        if (input[7] < 3.248952) {
                            var78 = 0.07870261;
                        } else {
                            var78 = -0.0402479;
                        }
                    } else {
                        var78 = 0.2112206;
                    }
                } else {
                    if (input[1] < -0.4148392) {
                        if (input[1] < -0.42232025) {
                            var78 = 0.0004024029;
                        } else {
                            var78 = -0.0698404;
                        }
                    } else {
                        if (input[4] < -0.39458382) {
                            var78 = 0.22654296;
                        } else {
                            var78 = 0.011217953;
                        }
                    }
                }
            }
        }
    }
    var var79;
    if (input[3] < 6.108913) {
        if (input[3] < 5.2865734) {
            if (input[4] < 3.6508875) {
                if (input[4] < 2.5460162) {
                    if (input[3] < 4.464234) {
                        if (input[3] < 3.6418948) {
                            var79 = 0.000035726935;
                        } else {
                            var79 = -0.034036394;
                        }
                    } else {
                        if (input[1] < 2.1885526) {
                            var79 = -0.10994391;
                        } else {
                            var79 = 0.11941493;
                        }
                    }
                } else {
                    if (input[6] < -0.86047095) {
                        if (input[2] < -0.18135624) {
                            var79 = 0.23084979;
                        } else {
                            var79 = 0.013312264;
                        }
                    } else {
                        if (input[6] < -0.38885298) {
                            var79 = -0.07200189;
                        } else {
                            var79 = 0.023199007;
                        }
                    }
                }
            } else {
                if (input[1] < 2.1885526) {
                    if (input[6] < 0.15280928) {
                        if (input[1] < 1.7886586) {
                            var79 = 0.048740715;
                        } else {
                            var79 = 0.118794166;
                        }
                    } else {
                        if (input[6] < 0.39564443) {
                            var79 = -0.034315716;
                        } else {
                            var79 = 0.022895396;
                        }
                    }
                } else {
                    if (input[7] < -0.6595239) {
                        if (input[0] < 3.5477352) {
                            var79 = -0.06734317;
                        } else {
                            var79 = -0.024274498;
                        }
                    } else {
                        if (input[0] < 3.5477352) {
                            var79 = -0.022998497;
                        } else {
                            var79 = -0.13257532;
                        }
                    }
                }
            }
        } else {
            if (input[0] < 0.42701507) {
                if (input[1] < 3.6507502) {
                    if (input[6] < -0.10987096) {
                        var79 = -0.13362208;
                    } else {
                        var79 = -0.02113055;
                    }
                } else {
                    var79 = -0.008557875;
                }
            } else {
                if (input[2] < -0.23563433) {
                    var79 = -0.063086;
                } else {
                    if (input[7] < -0.9691414) {
                        if (input[1] < 2.9135306) {
                            var79 = -0.00026398004;
                        } else {
                            var79 = 0.026151609;
                        }
                    } else {
                        if (input[0] < 3.5477352) {
                            var79 = -0.0073781135;
                        } else {
                            var79 = -0.036221374;
                        }
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.26734516) {
            if (input[2] < -0.20849527) {
                if (input[6] < -0.19405304) {
                    if (input[6] < -0.73580486) {
                        if (input[0] < -0.29855236) {
                            var79 = 0.00047317744;
                        } else {
                            var79 = 0.056834403;
                        }
                    } else {
                        if (input[7] < 0.16795768) {
                            var79 = -0.121173635;
                        } else {
                            var79 = -0.00009469986;
                        }
                    }
                } else {
                    if (input[7] < 0.71287626) {
                        var79 = 0.20524798;
                    } else {
                        if (input[0] < -0.34536317) {
                            var79 = 0.045043945;
                        } else {
                            var79 = -0.12565474;
                        }
                    }
                }
            } else {
                var79 = -0.16275837;
            }
        } else {
            if (input[0] < -0.048894748) {
                if (input[6] < -0.46728474) {
                    if (input[1] < 3.9649527) {
                        var79 = 0.31236908;
                    } else {
                        if (input[2] < -0.20849527) {
                            var79 = 0.13182063;
                        } else {
                            var79 = -0.030500758;
                        }
                    }
                } else {
                    if (input[7] < -0.45000497) {
                        if (input[0] < -0.17372355) {
                            var79 = -0.13446224;
                        } else {
                            var79 = 0.012963224;
                        }
                    } else {
                        if (input[0] < -0.17372355) {
                            var79 = 0.029106736;
                        } else {
                            var79 = 0.006263638;
                        }
                    }
                }
            } else {
                if (input[7] < -0.25253314) {
                    if (input[7] < -0.98284286) {
                        if (input[0] < 0.54404205) {
                            var79 = 0.014294038;
                        } else {
                            var79 = -0.010559856;
                        }
                    } else {
                        if (input[2] < 1.6966656) {
                            var79 = 0.06114689;
                        } else {
                            var79 = 0.0081232395;
                        }
                    }
                } else {
                    if (input[0] < 1.3632311) {
                        if (input[6] < -0.17199324) {
                            var79 = -0.14885505;
                        } else {
                            var79 = -0.05167978;
                        }
                    } else {
                        if (input[1] < 4.602879) {
                            var79 = 0.0077784066;
                        } else {
                            var79 = -0.01221385;
                        }
                    }
                }
            }
        }
    }
    var var80;
    if (input[6] < 0.097515695) {
        if (input[6] < -0.07491647) {
            if (input[4] < -0.40130264) {
                if (input[7] < 0.6228381) {
                    if (input[6] < -0.31931022) {
                        if (input[6] < -0.52452344) {
                            var80 = -0.0015659299;
                        } else {
                            var80 = -0.16210148;
                        }
                    } else {
                        if (input[1] < -0.42776096) {
                            var80 = -0.024713855;
                        } else {
                            var80 = 0.08322526;
                        }
                    }
                } else {
                    if (input[7] < 0.8062492) {
                        if (input[2] < -0.25191775) {
                            var80 = -0.06558052;
                        } else {
                            var80 = -0.36992544;
                        }
                    } else {
                        if (input[7] < 2.2242022) {
                            var80 = -0.005559875;
                        } else {
                            var80 = -0.1377941;
                        }
                    }
                }
            } else {
                if (input[4] < -0.40018284) {
                    if (input[7] < -0.025550095) {
                        if (input[7] < -0.10175492) {
                            var80 = -0.0074640033;
                        } else {
                            var80 = -0.17861035;
                        }
                    } else {
                        if (input[7] < 1.3543984) {
                            var80 = 0.27044636;
                        } else {
                            var80 = 0.022594612;
                        }
                    }
                } else {
                    if (input[1] < -0.4175596) {
                        if (input[1] < -0.41891977) {
                            var80 = -0.009326126;
                        } else {
                            var80 = -0.13552333;
                        }
                    } else {
                        if (input[1] < -0.4148392) {
                            var80 = 0.026032055;
                        } else {
                            var80 = 0.000830705;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.41619942) {
                if (input[7] < 1.4277248) {
                    if (input[4] < -0.40130264) {
                        if (input[4] < -0.40466204) {
                            var80 = -0.047749057;
                        } else {
                            var80 = 0.39002237;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var80 = -0.069864474;
                        } else {
                            var80 = 0.011526998;
                        }
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        if (input[1] < -0.42844105) {
                            var80 = 0.10108761;
                        } else {
                            var80 = -0.18601057;
                        }
                    } else {
                        if (input[4] < -0.39883906) {
                            var80 = 0.6903648;
                        } else {
                            var80 = 0.24302422;
                        }
                    }
                }
            } else {
                if (input[1] < -0.41143876) {
                    if (input[6] < 0.070459716) {
                        if (input[6] < -0.05625953) {
                            var80 = -0.032750603;
                        } else {
                            var80 = -0.23439774;
                        }
                    } else {
                        if (input[2] < -0.24648994) {
                            var80 = 0.24520232;
                        } else {
                            var80 = -0.10042733;
                        }
                    }
                } else {
                    if (input[4] < -0.29436153) {
                        if (input[4] < -0.33411452) {
                            var80 = -0.01184255;
                        } else {
                            var80 = -0.06980287;
                        }
                    } else {
                        if (input[1] < -0.34819022) {
                            var80 = 0.09737415;
                        } else {
                            var80 = -0.010590744;
                        }
                    }
                }
            }
        }
    } else {
        if (input[6] < 0.13940509) {
            if (input[1] < -0.4100786) {
                if (input[4] < -0.3884249) {
                    if (input[4] < -0.39383727) {
                        if (input[4] < -0.39883906) {
                            var80 = 0.004608542;
                        } else {
                            var80 = 0.39805517;
                        }
                    } else {
                        if (input[0] < -0.33756137) {
                            var80 = -0.2868617;
                        } else {
                            var80 = -0.010577788;
                        }
                    }
                } else {
                    if (input[6] < 0.10888186) {
                        var80 = 0.19956371;
                    } else {
                        var80 = 0.8181823;
                    }
                }
            } else {
                if (input[4] < -0.3273957) {
                    if (input[4] < -0.3856254) {
                        if (input[2] < -0.24648994) {
                            var80 = 0.51010925;
                        } else {
                            var80 = -0.17045787;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var80 = 0.38165504;
                        } else {
                            var80 = -0.2882277;
                        }
                    }
                } else {
                    if (input[4] < -0.32664916) {
                        if (input[0] < -0.34926406) {
                            var80 = 0.64589936;
                        } else {
                            var80 = 0.100781865;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var80 = -0.21553965;
                        } else {
                            var80 = 0.07190018;
                        }
                    }
                }
            }
        } else {
            if (input[6] < 0.15939334) {
                if (input[4] < -0.40226245) {
                    var80 = -0.2707959;
                } else {
                    if (input[4] < -0.39458382) {
                        if (input[1] < -0.4257207) {
                            var80 = 0.13680857;
                        } else {
                            var80 = 0.5614097;
                        }
                    } else {
                        if (input[1] < -0.42368042) {
                            var80 = -0.34259364;
                        } else {
                            var80 = -0.0160494;
                        }
                    }
                }
            } else {
                if (input[1] < 0.019059421) {
                    if (input[1] < 0.00817795) {
                        if (input[0] < -0.21273255) {
                            var80 = 0.004459555;
                        } else {
                            var80 = -0.0040029925;
                        }
                    } else {
                        if (input[4] < -0.22373404) {
                            var80 = -0.42443267;
                        } else {
                            var80 = -0.036912378;
                        }
                    }
                } else {
                    if (input[6] < 0.17545679) {
                        if (input[2] < -0.13793376) {
                            var80 = -0.15866925;
                        } else {
                            var80 = 0.54694694;
                        }
                    } else {
                        if (input[4] < -0.05013273) {
                            var80 = -0.0666885;
                        } else {
                            var80 = 0.01332772;
                        }
                    }
                }
            }
        }
    }
    var var81;
    if (input[7] < 3.0238564) {
        if (input[4] < -0.34157985) {
            if (input[1] < -0.38491517) {
                if (input[1] < -0.38627535) {
                    if (input[0] < -0.26734516) {
                        if (input[3] < -0.40949714) {
                            var81 = -0.0007839858;
                        } else {
                            var81 = -0.03543068;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var81 = 0.020712672;
                        } else {
                            var81 = 0.17395368;
                        }
                    }
                } else {
                    if (input[6] < -0.8054629) {
                        if (input[7] < -0.6595239) {
                            var81 = 0.0911377;
                        } else {
                            var81 = -0.15079111;
                        }
                    } else {
                        if (input[0] < -0.26734516) {
                            var81 = 0.16370806;
                        } else {
                            var81 = -0.13118188;
                        }
                    }
                }
            } else {
                if (input[2] < -0.18135624) {
                    if (input[1] < -0.36995316) {
                        if (input[6] < 0.22764193) {
                            var81 = -0.05899971;
                        } else {
                            var81 = 0.05407371;
                        }
                    } else {
                        if (input[1] < -0.3672328) {
                            var81 = 0.08909544;
                        } else {
                            var81 = -0.009412052;
                        }
                    }
                } else {
                    if (input[6] < 0.28938338) {
                        if (input[7] < -0.88380086) {
                            var81 = -0.055090483;
                        } else {
                            var81 = 0.5345203;
                        }
                    } else {
                        var81 = -0.36404523;
                    }
                }
            }
        } else {
            if (input[4] < -0.34083334) {
                if (input[7] < -0.3457545) {
                    if (input[0] < -0.33756137) {
                        var81 = 0.086782485;
                    } else {
                        if (input[6] < -1.6721268) {
                            var81 = -0.014575804;
                        } else {
                            var81 = -0.12593926;
                        }
                    }
                } else {
                    if (input[7] < 1.3185877) {
                        if (input[6] < -0.62621254) {
                            var81 = 0.12254152;
                        } else {
                            var81 = 0.5906523;
                        }
                    } else {
                        var81 = 0.14924167;
                    }
                }
            } else {
                if (input[7] < 2.8045325) {
                    if (input[4] < -0.33859372) {
                        if (input[6] < 0.23643003) {
                            var81 = -0.062167287;
                        } else {
                            var81 = 0.12009985;
                        }
                    } else {
                        if (input[4] < -0.33411452) {
                            var81 = 0.02618651;
                        } else {
                            var81 = 0.0003904179;
                        }
                    }
                } else {
                    if (input[1] < -0.37811425) {
                        var81 = -0.30540022;
                    } else {
                        if (input[1] < -0.30194396) {
                            var81 = 0.025427992;
                        } else {
                            var81 = 0.13396092;
                        }
                    }
                }
            }
        }
    } else {
        if (input[2] < -0.007666345) {
            if (input[1] < -0.40395775) {
                if (input[6] < 1.7796307) {
                    if (input[2] < -0.24648994) {
                        if (input[6] < 0.46406695) {
                            var81 = 0.04139794;
                        } else {
                            var81 = -0.003974417;
                        }
                    } else {
                        if (input[6] < 0.03295901) {
                            var81 = 0.045596052;
                        } else {
                            var81 = 0.13166784;
                        }
                    }
                } else {
                    var81 = -0.15661931;
                }
            } else {
                if (input[1] < -0.3998772) {
                    if (input[7] < 3.248952) {
                        var81 = -0.18867226;
                    } else {
                        var81 = 0.14814377;
                    }
                } else {
                    if (input[1] < -0.39307627) {
                        if (input[6] < -0.15497094) {
                            var81 = 0.27170098;
                        } else {
                            var81 = -0.030134583;
                        }
                    } else {
                        if (input[3] < -0.31081644) {
                            var81 = -0.05676488;
                        } else {
                            var81 = 0.025851225;
                        }
                    }
                }
            }
        } else {
            var81 = 0.12417083;
        }
    }
    var var82;
    if (input[6] < 0.93331045) {
        if (input[6] < 0.9187714) {
            if (input[2] < -0.20849527) {
                if (input[3] < 0.3525373) {
                    if (input[4] < -0.011611541) {
                        if (input[4] < -0.022489617) {
                            var82 = 0.0019554384;
                        } else {
                            var82 = -0.119201265;
                        }
                    } else {
                        if (input[6] < -0.25096783) {
                            var82 = -0.0068208366;
                        } else {
                            var82 = 0.12761194;
                        }
                    }
                } else {
                    if (input[6] < 0.2845151) {
                        if (input[1] < 0.15779817) {
                            var82 = -0.066076614;
                        } else {
                            var82 = -0.0074436576;
                        }
                    } else {
                        if (input[6] < 0.30664396) {
                            var82 = 0.759456;
                        } else {
                            var82 = 0.026121339;
                        }
                    }
                }
            } else {
                if (input[1] < -0.33186802) {
                    if (input[1] < -0.3672328) {
                        if (input[6] < -1.2959688) {
                            var82 = 0.05947891;
                        } else {
                            var82 = -0.004276032;
                        }
                    } else {
                        if (input[7] < -0.25025946) {
                            var82 = 0.0075162887;
                        } else {
                            var82 = -0.06941716;
                        }
                    }
                } else {
                    if (input[3] < -0.31081644) {
                        if (input[7] < 0.5327999) {
                            var82 = -0.0026520598;
                        } else {
                            var82 = 0.1431136;
                        }
                    } else {
                        if (input[1] < -0.32914764) {
                            var82 = -0.16407356;
                        } else {
                            var82 = 0.000059348804;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.39458382) {
                if (input[3] < -0.44513187) {
                    if (input[1] < -0.42708087) {
                        if (input[1] < -0.42776096) {
                            var82 = -0.0015326164;
                        } else {
                            var82 = -0.30861095;
                        }
                    } else {
                        if (input[1] < -0.41891977) {
                            var82 = 0.17810714;
                        } else {
                            var82 = -0.017343093;
                        }
                    }
                } else {
                    var82 = 0.68770176;
                }
            } else {
                if (input[2] < -0.23563433) {
                    if (input[1] < -0.41075867) {
                        var82 = -0.27704537;
                    } else {
                        if (input[4] < -0.3733076) {
                            var82 = 0.2756979;
                        } else {
                            var82 = -0.16079752;
                        }
                    }
                } else {
                    if (input[1] < -0.4175596) {
                        if (input[1] < -0.42368042) {
                            var82 = -0.012360941;
                        } else {
                            var82 = -0.30386117;
                        }
                    } else {
                        if (input[1] < -0.41279894) {
                            var82 = 0.27243936;
                        } else {
                            var82 = -0.0023607658;
                        }
                    }
                }
            }
        }
    } else {
        if (input[0] < -0.34926406) {
            if (input[7] < 2.3104768) {
                if (input[1] < -0.3332282) {
                    var82 = 0.25346917;
                } else {
                    var82 = -0.061315406;
                }
            } else {
                if (input[1] < -0.4257207) {
                    if (input[6] < 1.4207525) {
                        if (input[6] < 1.1517857) {
                            var82 = -0.07841575;
                        } else {
                            var82 = 0.012789631;
                        }
                    } else {
                        var82 = -0.15895422;
                    }
                } else {
                    if (input[4] < -0.39383727) {
                        var82 = 0.13018098;
                    } else {
                        if (input[1] < -0.41619942) {
                            var82 = -0.016744042;
                        } else {
                            var82 = 0.03842168;
                        }
                    }
                }
            }
        } else {
            if (input[2] < -0.24648994) {
                if (input[6] < 2.0145857) {
                    if (input[1] < -0.4243605) {
                        if (input[6] < 0.9883007) {
                            var82 = 0.23237942;
                        } else {
                            var82 = -0.05458172;
                        }
                    } else {
                        if (input[1] < -0.42164013) {
                            var82 = -0.25250867;
                        } else {
                            var82 = -0.05068247;
                        }
                    }
                } else {
                    if (input[0] < -0.12691276) {
                        if (input[1] < -0.3658726) {
                            var82 = 0.090991296;
                        } else {
                            var82 = -0.00697584;
                        }
                    } else {
                        var82 = 0.18351723;
                    }
                }
            } else {
                if (input[7] < 0.3372331) {
                    if (input[4] < -0.38487887) {
                        if (input[6] < 1.1517857) {
                            var82 = -0.15186496;
                        } else {
                            var82 = 0.08338092;
                        }
                    } else {
                        if (input[2] < -0.13793376) {
                            var82 = -0.010644251;
                        } else {
                            var82 = 0.0028500198;
                        }
                    }
                } else {
                    if (input[4] < -0.28185707) {
                        if (input[4] < -0.3285155) {
                            var82 = -0.001142703;
                        } else {
                            var82 = -0.1773218;
                        }
                    } else {
                        if (input[1] < -0.31826618) {
                            var82 = 0.17108198;
                        } else {
                            var82 = 0.014230697;
                        }
                    }
                }
            }
        }
    }
    var var83;
    if (input[1] < -0.42027995) {
        if (input[1] < -0.42368042) {
            if (input[6] < 0.78198916) {
                if (input[6] < -0.38885298) {
                    if (input[5] < 0.89645296) {
                        if (input[0] < -0.34536317) {
                            var83 = -0.012488364;
                        } else {
                            var83 = -0.1805858;
                        }
                    } else {
                        if (input[7] < 0.5394694) {
                            var83 = -0.030596143;
                        } else {
                            var83 = 0.14661357;
                        }
                    }
                } else {
                    if (input[1] < -0.4257207) {
                        if (input[7] < 2.3104768) {
                            var83 = -0.011267491;
                        } else {
                            var83 = 0.03166788;
                        }
                    } else {
                        if (input[0] < -0.33756137) {
                            var83 = 0.101711124;
                        } else {
                            var83 = 0.014920612;
                        }
                    }
                }
            } else {
                if (input[3] < -0.46431977) {
                    if (input[6] < 0.7829106) {
                        if (input[1] < -0.4257207) {
                            var83 = -0.018055826;
                        } else {
                            var83 = -0.26661065;
                        }
                    } else {
                        if (input[1] < -0.42776096) {
                            var83 = -0.004485187;
                        } else {
                            var83 = 0.07708083;
                        }
                    }
                } else {
                    if (input[6] < 0.9070014) {
                        if (input[6] < 0.78802186) {
                            var83 = -0.021471167;
                        } else {
                            var83 = -0.2392525;
                        }
                    } else {
                        if (input[6] < 1.2632518) {
                            var83 = -0.01489172;
                        } else {
                            var83 = 0.10028834;
                        }
                    }
                }
            }
        } else {
            if (input[6] < 0.78802186) {
                if (input[6] < -0.44490635) {
                    if (input[7] < 0.7395542) {
                        if (input[2] < -0.24648994) {
                            var83 = 0.013452147;
                        } else {
                            var83 = 0.16682988;
                        }
                    } else {
                        if (input[6] < -0.552997) {
                            var83 = -0.20085292;
                        } else {
                            var83 = 0.092928216;
                        }
                    }
                } else {
                    if (input[6] < 0.017391874) {
                        if (input[6] < -0.05625953) {
                            var83 = -0.07825597;
                        } else {
                            var83 = -0.231125;
                        }
                    } else {
                        if (input[6] < 0.10158316) {
                            var83 = 0.13496813;
                        } else {
                            var83 = -0.06340291;
                        }
                    }
                }
            } else {
                if (input[6] < 0.832688) {
                    if (input[1] < -0.42300034) {
                        if (input[3] < -0.4588375) {
                            var83 = -0.2240103;
                        } else {
                            var83 = 0.10011326;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var83 = 0.2034598;
                        } else {
                            var83 = 0.58646894;
                        }
                    }
                } else {
                    if (input[4] < -0.40130264) {
                        var83 = -0.16346416;
                    } else {
                        if (input[7] < 1.7161589) {
                            var83 = -0.14998236;
                        } else {
                            var83 = 0.062053658;
                        }
                    }
                }
            }
        }
    } else {
        if (input[3] < -0.4588375) {
            if (input[6] < 0.03295901) {
                var83 = -0.20442647;
            } else {
                var83 = 0.26795027;
            }
        } else {
            if (input[4] < -0.40018284) {
                if (input[6] < -0.5637625) {
                    if (input[1] < -0.4168795) {
                        if (input[0] < -0.33756137) {
                            var83 = 0.044937614;
                        } else {
                            var83 = 0.37424716;
                        }
                    } else {
                        if (input[7] < 0.5394694) {
                            var83 = -0.06396565;
                        } else {
                            var83 = 0.21682341;
                        }
                    }
                } else {
                    if (input[7] < 3.248952) {
                        if (input[6] < 0.8608831) {
                            var83 = -0.13572301;
                        } else {
                            var83 = 0.17091258;
                        }
                    } else {
                        var83 = 0.17916614;
                    }
                }
            } else {
                if (input[4] < -0.3840257) {
                    if (input[7] < 0.5080835) {
                        if (input[7] < 0.39379358) {
                            var83 = 0.0035120898;
                        } else {
                            var83 = -0.324998;
                        }
                    } else {
                        if (input[7] < 0.6228381) {
                            var83 = 0.18183103;
                        } else {
                            var83 = 0.016105844;
                        }
                    }
                } else {
                    if (input[4] < -0.3811462) {
                        if (input[6] < 0.78198916) {
                            var83 = -0.06340605;
                        } else {
                            var83 = 0.18775545;
                        }
                    } else {
                        if (input[4] < -0.376667) {
                            var83 = 0.01429524;
                        } else {
                            var83 = -0.000107436805;
                        }
                    }
                }
            }
        }
    }
    var var84;
    if (input[7] < 0.59282535) {
        if (input[7] < 0.54780626) {
            if (input[4] < -0.376667) {
                if (input[0] < -0.34536317) {
                    if (input[4] < -0.39309075) {
                        if (input[7] < 0.5080835) {
                            var84 = -0.010058532;
                        } else {
                            var84 = 0.19464557;
                        }
                    } else {
                        if (input[7] < 0.19140512) {
                            var84 = -0.009471217;
                        } else {
                            var84 = -0.27889916;
                        }
                    }
                } else {
                    if (input[3] < -0.40949714) {
                        if (input[6] < 0.070459716) {
                            var84 = 0.0023178342;
                        } else {
                            var84 = 0.032967936;
                        }
                    } else {
                        if (input[1] < -0.37947443) {
                            var84 = 0.13298547;
                        } else {
                            var84 = 0.0043880115;
                        }
                    }
                }
            } else {
                if (input[4] < -0.37442738) {
                    if (input[6] < -0.2619518) {
                        if (input[6] < -0.6802001) {
                            var84 = -0.094614685;
                        } else {
                            var84 = 0.0645644;
                        }
                    } else {
                        if (input[6] < -0.061430633) {
                            var84 = -0.2621749;
                        } else {
                            var84 = -0.07357109;
                        }
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        if (input[4] < -0.3684551) {
                            var84 = 0.5754728;
                        } else {
                            var84 = 0.00792129;
                        }
                    } else {
                        if (input[3] < -0.40949714) {
                            var84 = -0.013104554;
                        } else {
                            var84 = 0.0004545056;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.26249865) {
                if (input[4] < -0.22373404) {
                    if (input[6] < -0.10987096) {
                        if (input[2] < -0.18135624) {
                            var84 = 0.18257159;
                        } else {
                            var84 = -0.045948394;
                        }
                    } else {
                        if (input[4] < -0.34979174) {
                            var84 = -0.06500081;
                        } else {
                            var84 = 0.059360094;
                        }
                    }
                } else {
                    if (input[1] < -0.30194396) {
                        var84 = 0.8870918;
                    } else {
                        if (input[0] < -0.31805685) {
                            var84 = 0.42634293;
                        } else {
                            var84 = -0.123895995;
                        }
                    }
                }
            } else {
                if (input[0] < -0.26734516) {
                    if (input[4] < 0.25714093) {
                        if (input[1] < -0.22577366) {
                            var84 = -0.34059012;
                        } else {
                            var84 = -0.16988984;
                        }
                    } else {
                        var84 = 0.103820376;
                    }
                } else {
                    if (input[0] < -0.21273255) {
                        if (input[4] < -0.3296353) {
                            var84 = -0.19079377;
                        } else {
                            var84 = 0.3405419;
                        }
                    } else {
                        if (input[6] < 0.48636204) {
                            var84 = -0.14638466;
                        } else {
                            var84 = 0.077743106;
                        }
                    }
                }
            }
        }
    } else {
        if (input[5] < 0.89645296) {
            if (input[4] < -0.042965997) {
                if (input[4] < -0.081039265) {
                    if (input[4] < -0.2284052) {
                        if (input[2] < -0.13793376) {
                            var84 = 0.007939021;
                        } else {
                            var84 = 0.32977322;
                        }
                    } else {
                        if (input[2] < -0.18135624) {
                            var84 = 0.017669301;
                        } else {
                            var84 = -0.20654836;
                        }
                    }
                } else {
                    if (input[1] < 0.07890751) {
                        if (input[7] < 1.4711571) {
                            var84 = 0.52133423;
                        } else {
                            var84 = 0.13549447;
                        }
                    } else {
                        if (input[6] < 0.017391874) {
                            var84 = 0.08769035;
                        } else {
                            var84 = -0.23893158;
                        }
                    }
                }
            } else {
                if (input[1] < -0.0027035202) {
                    var84 = -0.49512726;
                } else {
                    if (input[1] < 0.028580708) {
                        var84 = 0.40541753;
                    } else {
                        if (input[3] < 0.62665045) {
                            var84 = -0.1944272;
                        } else {
                            var84 = 0.024715742;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.20401073) {
                if (input[1] < -0.21897274) {
                    if (input[6] < 0.017391874) {
                        if (input[1] < -0.42300034) {
                            var84 = 0.07357711;
                        } else {
                            var84 = -0.049341064;
                        }
                    } else {
                        if (input[1] < -0.33186802) {
                            var84 = -0.007908403;
                        } else {
                            var84 = 0.046781942;
                        }
                    }
                } else {
                    if (input[4] < -0.17734224) {
                        var84 = -0.38689598;
                    } else {
                        var84 = 0.6276629;
                    }
                }
            } else {
                if (input[1] < -0.19040889) {
                    if (input[4] < -0.25460857) {
                        if (input[1] < -0.20129035) {
                            var84 = 0.08762491;
                        } else {
                            var84 = 0.6843268;
                        }
                    } else {
                        if (input[0] < -0.26734516) {
                            var84 = -0.11057222;
                        } else {
                            var84 = 0.36440712;
                        }
                    }
                } else {
                    if (input[6] < 0.37091032) {
                        if (input[6] < -0.07167272) {
                            var84 = 0.049198393;
                        } else {
                            var84 = -0.06838248;
                        }
                    } else {
                        if (input[4] < -0.12807095) {
                            var84 = 0.18193056;
                        } else {
                            var84 = 0.004129836;
                        }
                    }
                }
            }
        }
    }
    var var85;
    if (input[7] < 2.3132608) {
        if (input[1] < -0.28834212) {
            if (input[1] < -0.35499114) {
                if (input[0] < -0.29855236) {
                    if (input[7] < -0.32041907) {
                        if (input[4] < -0.33859372) {
                            var85 = -0.0069434135;
                        } else {
                            var85 = -0.06315035;
                        }
                    } else {
                        if (input[1] < -0.36995316) {
                            var85 = 0.0022596712;
                        } else {
                            var85 = 0.05039402;
                        }
                    }
                } else {
                    if (input[7] < 0.59282535) {
                        if (input[7] < 0.5512693) {
                            var85 = -0.003175691;
                        } else {
                            var85 = 0.061507244;
                        }
                    } else {
                        if (input[7] < 0.9725973) {
                            var85 = -0.07132393;
                        } else {
                            var85 = 0.019614456;
                        }
                    }
                }
            } else {
                if (input[6] < 0.1420343) {
                    if (input[7] < 1.8915579) {
                        if (input[1] < -0.29514304) {
                            var85 = 0.009784832;
                        } else {
                            var85 = 0.068840526;
                        }
                    } else {
                        if (input[1] < -0.3237069) {
                            var85 = 0.016432889;
                        } else {
                            var85 = -0.34921843;
                        }
                    }
                } else {
                    if (input[6] < 0.15280928) {
                        var85 = -0.2698955;
                    } else {
                        if (input[7] < 2.2086458) {
                            var85 = -0.010932405;
                        } else {
                            var85 = 0.10753011;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.23393477) {
                if (input[7] < 1.8906171) {
                    if (input[1] < -0.23801532) {
                        if (input[7] < 1.5832454) {
                            var85 = -0.009350164;
                        } else {
                            var85 = -0.10423351;
                        }
                    } else {
                        if (input[7] < 0.1638199) {
                            var85 = -0.03876413;
                        } else {
                            var85 = -0.33351722;
                        }
                    }
                } else {
                    if (input[4] < -0.2646868) {
                        if (input[4] < -0.29021826) {
                            var85 = 0.2345614;
                        } else {
                            var85 = -0.26862356;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var85 = 0.41355702;
                        } else {
                            var85 = -0.11330625;
                        }
                    }
                }
            } else {
                if (input[1] < -0.18496816) {
                    if (input[7] < 1.8294723) {
                        if (input[7] < 1.6732836) {
                            var85 = 0.014913376;
                        } else {
                            var85 = 0.21315053;
                        }
                    } else {
                        if (input[1] < -0.19448943) {
                            var85 = -0.20915219;
                        } else {
                            var85 = 0.29200295;
                        }
                    }
                } else {
                    if (input[1] < -0.1632052) {
                        if (input[7] < 0.1638199) {
                            var85 = 0.0039341506;
                        } else {
                            var85 = -0.14503635;
                        }
                    } else {
                        if (input[7] < 0.3372331) {
                            var85 = -0.0015378589;
                        } else {
                            var85 = 0.013224124;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.4243605) {
            if (input[4] < -0.40690163) {
                if (input[1] < -0.42776096) {
                    if (input[6] < 1.4207525) {
                        if (input[6] < -0.33531734) {
                            var85 = -0.09015019;
                        } else {
                            var85 = -0.004757148;
                        }
                    } else {
                        var85 = -0.13325208;
                    }
                } else {
                    if (input[6] < 0.066193745) {
                        var85 = -0.04000497;
                    } else {
                        var85 = -0.29400998;
                    }
                }
            } else {
                if (input[7] < 2.4836273) {
                    if (input[4] < -0.40466204) {
                        if (input[1] < -0.42708087) {
                            var85 = 0.17334042;
                        } else {
                            var85 = -0.05611793;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var85 = 0.34347615;
                        } else {
                            var85 = 0.035278488;
                        }
                    }
                } else {
                    if (input[7] < 3.0238564) {
                        if (input[1] < -0.4257207) {
                            var85 = 0.0051760413;
                        } else {
                            var85 = -0.078933276;
                        }
                    } else {
                        if (input[4] < -0.40354225) {
                            var85 = -0.0050642802;
                        } else {
                            var85 = 0.21844892;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.40354225) {
                if (input[1] < -0.42232025) {
                    var85 = -0.29422113;
                } else {
                    var85 = 0.11305544;
                }
            } else {
                if (input[6] < 0.15899417) {
                    if (input[1] < -0.41279894) {
                        if (input[5] < 0.89645296) {
                            var85 = -0.26254115;
                        } else {
                            var85 = 0.17195135;
                        }
                    } else {
                        if (input[1] < -0.10199694) {
                            var85 = -0.03569021;
                        } else {
                            var85 = 0.04542525;
                        }
                    }
                } else {
                    if (input[4] < -0.34755215) {
                        if (input[4] < -0.35763034) {
                            var85 = -0.023017157;
                        } else {
                            var85 = -0.22253534;
                        }
                    } else {
                        if (input[1] < -0.37947443) {
                            var85 = 0.18285573;
                        } else {
                            var85 = -0.0036065339;
                        }
                    }
                }
            }
        }
    }
    var var86;
    if (input[0] < -0.34536317) {
        if (input[4] < -0.2602076) {
            if (input[4] < -0.2863363) {
                if (input[1] < -0.01630536) {
                    if (input[3] < -0.14634857) {
                        if (input[4] < -0.3324348) {
                            var86 = -0.0068722935;
                        } else {
                            var86 = 0.027634092;
                        }
                    } else {
                        if (input[7] < -0.3922983) {
                            var86 = 0.110149;
                        } else {
                            var86 = -0.3260706;
                        }
                    }
                } else {
                    if (input[6] < -1.0206758) {
                        if (input[7] < -0.3922983) {
                            var86 = -0.00038152933;
                        } else {
                            var86 = 0.38512048;
                        }
                    } else {
                        if (input[6] < -0.9053535) {
                            var86 = -0.2164689;
                        } else {
                            var86 = 0.042902615;
                        }
                    }
                }
            } else {
                if (input[6] < 0.48636204) {
                    if (input[1] < -0.2992236) {
                        if (input[6] < -0.52452344) {
                            var86 = -0.10190174;
                        } else {
                            var86 = 0.6098949;
                        }
                    } else {
                        if (input[7] < 1.8294723) {
                            var86 = 0.13593128;
                        } else {
                            var86 = -0.067343414;
                        }
                    }
                } else {
                    if (input[1] < -0.265219) {
                        if (input[7] < -0.025550095) {
                            var86 = 0.0027317526;
                        } else {
                            var86 = -0.2281235;
                        }
                    } else {
                        var86 = 0.0977344;
                    }
                }
            }
        } else {
            if (input[4] < -0.22373404) {
                if (input[7] < 1.8294723) {
                    if (input[7] < -0.10175492) {
                        if (input[1] < -0.0380683) {
                            var86 = -0.066720575;
                        } else {
                            var86 = 0.07989819;
                        }
                    } else {
                        if (input[6] < 0.6680634) {
                            var86 = -0.18396695;
                        } else {
                            var86 = -0.52782136;
                        }
                    }
                } else {
                    if (input[7] < 1.8915579) {
                        if (input[1] < -0.23801532) {
                            var86 = 0.4405305;
                        } else {
                            var86 = -0.072538175;
                        }
                    } else {
                        if (input[7] < 2.4836273) {
                            var86 = -0.16074152;
                        } else {
                            var86 = 0.061704066;
                        }
                    }
                }
            } else {
                if (input[4] < -0.22101451) {
                    if (input[1] < 0.15779817) {
                        var86 = 0.47706023;
                    } else {
                        var86 = -0.2014348;
                    }
                } else {
                    if (input[3] < -0.07507915) {
                        if (input[4] < -0.17734224) {
                            var86 = -0.18804993;
                        } else {
                            var86 = -0.023271088;
                        }
                    } else {
                        if (input[1] < -0.021746093) {
                            var86 = 0.10068683;
                        } else {
                            var86 = -0.0071162684;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.4257207) {
            if (input[6] < 0.7276644) {
                if (input[6] < 0.6409217) {
                    if (input[6] < 0.60563) {
                        if (input[6] < 0.20030792) {
                            var86 = 0.00030233624;
                        } else {
                            var86 = 0.05279704;
                        }
                    } else {
                        if (input[7] < 1.5558425) {
                            var86 = -0.14209695;
                        } else {
                            var86 = -0.057738286;
                        }
                    }
                } else {
                    var86 = 0.1867381;
                }
            } else {
                if (input[6] < 0.7594882) {
                    var86 = -0.36175343;
                } else {
                    if (input[6] < 0.9883007) {
                        if (input[6] < 0.9187714) {
                            var86 = -0.014517833;
                        } else {
                            var86 = 0.08250933;
                        }
                    } else {
                        if (input[6] < 1.0982811) {
                            var86 = -0.08823243;
                        } else {
                            var86 = -0.014183043;
                        }
                    }
                }
            }
        } else {
            if (input[4] < -0.39682344) {
                if (input[6] < 0.60563) {
                    if (input[2] < -0.24648994) {
                        if (input[7] < 1.6732836) {
                            var86 = 0.009835355;
                        } else {
                            var86 = -0.07089074;
                        }
                    } else {
                        if (input[6] < 0.017391874) {
                            var86 = -0.05610529;
                        } else {
                            var86 = 0.36244348;
                        }
                    }
                } else {
                    if (input[2] < -0.24648994) {
                        if (input[7] < 1.7161589) {
                            var86 = -0.011134042;
                        } else {
                            var86 = 0.17543846;
                        }
                    } else {
                        if (input[7] < 0.3372331) {
                            var86 = -0.104107015;
                        } else {
                            var86 = 0.6550408;
                        }
                    }
                }
            } else {
                if (input[4] < -0.3923442) {
                    if (input[7] < 0.8062492) {
                        if (input[6] < -0.38885298) {
                            var86 = 0.05126682;
                        } else {
                            var86 = -0.040156618;
                        }
                    } else {
                        if (input[7] < 1.061024) {
                            var86 = -0.31959903;
                        } else {
                            var86 = -0.044228863;
                        }
                    }
                } else {
                    if (input[1] < -0.38015452) {
                        if (input[0] < -0.33756137) {
                            var86 = 0.033800397;
                        } else {
                            var86 = 0.0020188105;
                        }
                    } else {
                        if (input[4] < -0.36049208) {
                            var86 = -0.027677858;
                        } else {
                            var86 = 0.000527687;
                        }
                    }
                }
            }
        }
    }
    var var87;
    if (input[7] < 1.5143926) {
        if (input[1] < -0.42844105) {
            if (input[7] < 0.29901654) {
                if (input[6] < -0.28669545) {
                    var87 = -0.06241774;
                } else {
                    if (input[6] < 0.39564443) {
                        if (input[7] < -0.5094603) {
                            var87 = -0.0063794795;
                        } else {
                            var87 = 0.013644505;
                        }
                    } else {
                        var87 = 0.043952126;
                    }
                }
            } else {
                var87 = -0.13589588;
            }
        } else {
            if (input[4] < -0.40690163) {
                if (input[6] < -0.28669545) {
                    if (input[1] < -0.42776096) {
                        var87 = 0.015412903;
                    } else {
                        var87 = 0.42466566;
                    }
                } else {
                    if (input[7] < 0.99799716) {
                        if (input[7] < -0.63063467) {
                            var87 = 0.020103682;
                        } else {
                            var87 = -0.092524424;
                        }
                    } else {
                        var87 = 0.24523923;
                    }
                }
            } else {
                if (input[1] < -0.42027995) {
                    if (input[7] < 1.4711571) {
                        if (input[7] < 1.4277248) {
                            var87 = -0.005380533;
                        } else {
                            var87 = 0.12569109;
                        }
                    } else {
                        if (input[1] < -0.42776096) {
                            var87 = 0.15547074;
                        } else {
                            var87 = -0.3215092;
                        }
                    }
                } else {
                    if (input[3] < -0.44513187) {
                        if (input[6] < 0.6924137) {
                            var87 = 0.008874491;
                        } else {
                            var87 = 0.3319891;
                        }
                    } else {
                        if (input[4] < -0.39682344) {
                            var87 = 0.1244496;
                        } else {
                            var87 = 0.000217082;
                        }
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.19405304) {
            if (input[6] < -0.33531734) {
                if (input[1] < -0.4168795) {
                    if (input[7] < 2.2242022) {
                        var87 = 0.1886944;
                    } else {
                        if (input[1] < -0.42368042) {
                            var87 = -0.13914463;
                        } else {
                            var87 = 0.033144165;
                        }
                    }
                } else {
                    if (input[1] < -0.39443648) {
                        if (input[4] < -0.38487887) {
                            var87 = -0.046316464;
                        } else {
                            var87 = -0.28606442;
                        }
                    } else {
                        if (input[1] < -0.36043188) {
                            var87 = 0.10976782;
                        } else {
                            var87 = -0.056105323;
                        }
                    }
                }
            } else {
                if (input[2] < -0.18135624) {
                    if (input[2] < -0.23563433) {
                        if (input[1] < -0.3672328) {
                            var87 = -0.16849673;
                        } else {
                            var87 = -0.005770874;
                        }
                    } else {
                        var87 = -0.4044329;
                    }
                } else {
                    if (input[1] < -0.38015452) {
                        var87 = -0.06432185;
                    } else {
                        var87 = 0.06529541;
                    }
                }
            }
        } else {
            if (input[0] < -0.29855236) {
                if (input[1] < -0.265219) {
                    if (input[4] < -0.23109274) {
                        if (input[4] < -0.27409312) {
                            var87 = -0.0068583577;
                        } else {
                            var87 = 0.07831988;
                        }
                    } else {
                        if (input[7] < 1.8294723) {
                            var87 = -0.38157746;
                        } else {
                            var87 = -0.06692344;
                        }
                    }
                } else {
                    if (input[1] < -0.25841808) {
                        if (input[0] < -0.33756137) {
                            var87 = 0.30029964;
                        } else {
                            var87 = -0.11742726;
                        }
                    } else {
                        if (input[4] < -0.280364) {
                            var87 = 0.10612126;
                        } else {
                            var87 = -0.007727021;
                        }
                    }
                }
            } else {
                if (input[1] < -0.31826618) {
                    if (input[7] < 1.7161589) {
                        if (input[2] < -0.25191775) {
                            var87 = 0.026966983;
                        } else {
                            var87 = 0.46305063;
                        }
                    } else {
                        if (input[3] < -0.34371) {
                            var87 = -0.022526762;
                        } else {
                            var87 = 0.3227761;
                        }
                    }
                } else {
                    if (input[6] < -0.04427114) {
                        if (input[1] < -0.0027035202) {
                            var87 = -0.4088866;
                        } else {
                            var87 = 0.11310769;
                        }
                    } else {
                        if (input[3] < -0.31081644) {
                            var87 = -0.22732548;
                        } else {
                            var87 = 0.08527211;
                        }
                    }
                }
            }
        }
    }
    var var88;
    if (input[1] < -0.41075867) {
        if (input[6] < -0.6802001) {
            if (input[4] < -0.38487887) {
                if (input[7] < 0.8062492) {
                    if (input[7] < 0.03758989) {
                        if (input[7] < -0.10175492) {
                            var88 = 0.0010304536;
                        } else {
                            var88 = 0.38708082;
                        }
                    } else {
                        if (input[6] < -0.8054629) {
                            var88 = -0.07469916;
                        } else {
                            var88 = -0.0049928357;
                        }
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        var88 = 0.7671226;
                    } else {
                        if (input[1] < -0.4257207) {
                            var88 = -0.0010700942;
                        } else {
                            var88 = -0.06951485;
                        }
                    }
                }
            } else {
                if (input[7] < -0.4276074) {
                    if (input[7] < -0.67771345) {
                        if (input[7] < -0.7384535) {
                            var88 = -0.051854014;
                        } else {
                            var88 = 0.2703037;
                        }
                    } else {
                        if (input[6] < -1.2959688) {
                            var88 = -0.07581509;
                        } else {
                            var88 = -0.03527391;
                        }
                    }
                } else {
                    if (input[7] < 0.1638199) {
                        if (input[7] < 0.11262171) {
                            var88 = 0.33181876;
                        } else {
                            var88 = 1.1239877;
                        }
                    } else {
                        if (input[6] < -0.9479416) {
                            var88 = -0.23163515;
                        } else {
                            var88 = -0.008321196;
                        }
                    }
                }
            }
        } else {
            if (input[6] < -0.34026033) {
                if (input[4] < -0.39309075) {
                    if (input[7] < 0.7395542) {
                        if (input[4] < -0.39682344) {
                            var88 = 0.0064616953;
                        } else {
                            var88 = 0.21145156;
                        }
                    } else {
                        if (input[4] < -0.40018284) {
                            var88 = 0.009092915;
                        } else {
                            var88 = -0.19124487;
                        }
                    }
                } else {
                    if (input[7] < 0.99799716) {
                        if (input[7] < 0.3372331) {
                            var88 = -0.060611986;
                        } else {
                            var88 = -0.16567494;
                        }
                    } else {
                        if (input[1] < -0.4168795) {
                            var88 = 0.12375023;
                        } else {
                            var88 = -0.035888102;
                        }
                    }
                }
            } else {
                if (input[1] < -0.41279894) {
                    if (input[6] < 0.18851979) {
                        if (input[6] < 0.17173328) {
                            var88 = 0.0034139315;
                        } else {
                            var88 = 0.08516307;
                        }
                    } else {
                        if (input[6] < 0.5132408) {
                            var88 = -0.03268027;
                        } else {
                            var88 = 0.002904276;
                        }
                    }
                } else {
                    if (input[4] < -0.39010462) {
                        if (input[7] < -0.3457545) {
                            var88 = -0.057656217;
                        } else {
                            var88 = 0.3479509;
                        }
                    } else {
                        if (input[6] < -0.2619518) {
                            var88 = 0.18530235;
                        } else {
                            var88 = -0.02246839;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.39458382) {
            if (input[6] < 0.22764193) {
                if (input[6] < 0.19602472) {
                    if (input[6] < 0.17173328) {
                        if (input[0] < -0.33756137) {
                            var88 = 0.060207378;
                        } else {
                            var88 = -0.07204679;
                        }
                    } else {
                        var88 = -0.228566;
                    }
                } else {
                    var88 = 0.35203052;
                }
            } else {
                if (input[0] < -0.33756137) {
                    if (input[1] < -0.4100786) {
                        if (input[6] < 0.23643003) {
                            var88 = 0.0028606297;
                        } else {
                            var88 = -0.09088401;
                        }
                    } else {
                        var88 = -0.314075;
                    }
                } else {
                    var88 = 0.08403578;
                }
            }
        } else {
            if (input[0] < -0.34926406) {
                if (input[1] < -0.40259758) {
                    if (input[4] < -0.39010462) {
                        if (input[3] < -0.4314262) {
                            var88 = 0.53313357;
                        } else {
                            var88 = -0.045170404;
                        }
                    } else {
                        if (input[7] < 2.3132608) {
                            var88 = -0.025644133;
                        } else {
                            var88 = -0.30293754;
                        }
                    }
                } else {
                    if (input[1] < -0.398517) {
                        if (input[4] < -0.39010462) {
                            var88 = -0.2640883;
                        } else {
                            var88 = 0.24717493;
                        }
                    } else {
                        if (input[1] < -0.38627535) {
                            var88 = -0.094399735;
                        } else {
                            var88 = -0.007741341;
                        }
                    }
                }
            } else {
                if (input[6] < 0.22764193) {
                    if (input[4] < -0.3889848) {
                        if (input[5] < 0.89645296) {
                            var88 = -0.019710723;
                        } else {
                            var88 = -0.23568235;
                        }
                    } else {
                        if (input[6] < 0.043039475) {
                            var88 = 0.000999452;
                        } else {
                            var88 = -0.011670425;
                        }
                    }
                } else {
                    if (input[4] < -0.3889848) {
                        if (input[7] < 1.8501443) {
                            var88 = 0.15618198;
                        } else {
                            var88 = -0.006289525;
                        }
                    } else {
                        if (input[1] < -0.38491517) {
                            var88 = 0.016316563;
                        } else {
                            var88 = -0.00016203104;
                        }
                    }
                }
            }
        }
    }
    var var89;
    if (input[4] < -0.3840257) {
        if (input[3] < -0.4314262) {
            if (input[1] < -0.39579666) {
                if (input[1] < -0.3991971) {
                    if (input[1] < -0.40259758) {
                        if (input[5] < 0.89645296) {
                            var89 = -0.006280294;
                        } else {
                            var89 = 0.004547791;
                        }
                    } else {
                        if (input[6] < -0.7894097) {
                            var89 = 0.09634845;
                        } else {
                            var89 = -0.16879489;
                        }
                    }
                } else {
                    if (input[4] < -0.39010462) {
                        if (input[7] < 1.4711571) {
                            var89 = 0.03571484;
                        } else {
                            var89 = -0.16502576;
                        }
                    } else {
                        if (input[6] < -0.013384028) {
                            var89 = 0.15595986;
                        } else {
                            var89 = 0.56073636;
                        }
                    }
                }
            } else {
                if (input[6] < -0.15497094) {
                    if (input[7] < 0.2188206) {
                        if (input[7] < -0.5640289) {
                            var89 = 0.020591864;
                        } else {
                            var89 = -0.062975325;
                        }
                    } else {
                        if (input[4] < -0.38487887) {
                            var89 = 0.15525576;
                        } else {
                            var89 = -0.07327828;
                        }
                    }
                } else {
                    if (input[6] < 0.9070014) {
                        if (input[4] < -0.3856254) {
                            var89 = -0.09118155;
                        } else {
                            var89 = -0.26673043;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var89 = 0.20685226;
                        } else {
                            var89 = 0.0015846492;
                        }
                    }
                }
            }
        } else {
            if (input[2] < -0.24648994) {
                if (input[1] < -0.40259758) {
                    if (input[4] < -0.38487887) {
                        if (input[7] < 1.8915579) {
                            var89 = -0.11960436;
                        } else {
                            var89 = 0.080911875;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var89 = 0.31957993;
                        } else {
                            var89 = -0.010971495;
                        }
                    }
                } else {
                    if (input[6] < -0.38885298) {
                        if (input[6] < -0.87364) {
                            var89 = 0.07558986;
                        } else {
                            var89 = -0.16282964;
                        }
                    } else {
                        if (input[1] < -0.3917161) {
                            var89 = 0.36085096;
                        } else {
                            var89 = 0.07532795;
                        }
                    }
                }
            } else {
                if (input[6] < -1.2647462) {
                    if (input[6] < -1.5376232) {
                        if (input[0] < -0.31805685) {
                            var89 = 0.0025692703;
                        } else {
                            var89 = -0.012789184;
                        }
                    } else {
                        var89 = 0.047533333;
                    }
                } else {
                    if (input[6] < 0.3804174) {
                        if (input[6] < -0.7698551) {
                            var89 = -0.11619791;
                        } else {
                            var89 = -0.36809257;
                        }
                    } else {
                        var89 = 0.05991376;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.3811462) {
            if (input[6] < 0.78198916) {
                if (input[6] < 0.41206968) {
                    if (input[6] < 0.17173328) {
                        if (input[7] < -0.052448295) {
                            var89 = 0.0033918128;
                        } else {
                            var89 = -0.104261346;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var89 = 0.15884334;
                        } else {
                            var89 = -0.08976227;
                        }
                    }
                } else {
                    if (input[7] < -0.63063467) {
                        var89 = -0.051710237;
                    } else {
                        if (input[1] < -0.38491517) {
                            var89 = -0.29263848;
                        } else {
                            var89 = -0.072717726;
                        }
                    }
                }
            } else {
                if (input[1] < -0.40259758) {
                    if (input[0] < -0.34926406) {
                        var89 = -0.14208667;
                    } else {
                        if (input[6] < 0.7829106) {
                            var89 = 0.13262604;
                        } else {
                            var89 = 0.4241192;
                        }
                    }
                } else {
                    var89 = -0.20183195;
                }
            }
        } else {
            if (input[3] < -0.4314262) {
                if (input[7] < 1.9305356) {
                    if (input[6] < -0.7920803) {
                        if (input[7] < -0.2809543) {
                            var89 = 0.004642596;
                        } else {
                            var89 = 0.26733586;
                        }
                    } else {
                        if (input[1] < -0.38015452) {
                            var89 = -0.0065829507;
                        } else {
                            var89 = 0.1715856;
                        }
                    }
                } else {
                    if (input[6] < -0.04038927) {
                        if (input[0] < -0.33756137) {
                            var89 = -0.07981201;
                        } else {
                            var89 = -0.30392146;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var89 = -0.1784478;
                        } else {
                            var89 = 0.35854283;
                        }
                    }
                }
            } else {
                if (input[4] < -0.37442738) {
                    if (input[7] < 0.11262171) {
                        if (input[6] < 0.18104404) {
                            var89 = 0.01180962;
                        } else {
                            var89 = 0.28026357;
                        }
                    } else {
                        if (input[7] < 1.7161589) {
                            var89 = -0.08385962;
                        } else {
                            var89 = 0.045150895;
                        }
                    }
                } else {
                    if (input[4] < -0.3733076) {
                        if (input[7] < 1.8906171) {
                            var89 = 0.019481536;
                        } else {
                            var89 = 0.24962448;
                        }
                    } else {
                        if (input[4] < -0.3684551) {
                            var89 = -0.02596164;
                        } else {
                            var89 = -0.000004594908;
                        }
                    }
                }
            }
        }
    }
    var var90;
    if (input[7] < 1.5143926) {
        if (input[1] < -0.26249865) {
            if (input[1] < -0.265219) {
                if (input[0] < -0.21273255) {
                    if (input[4] < -0.23407887) {
                        if (input[4] < -0.24453035) {
                            var90 = 0.0034811983;
                        } else {
                            var90 = -0.15345694;
                        }
                    } else {
                        if (input[4] < -0.17734224) {
                            var90 = 0.18507197;
                        } else {
                            var90 = -0.04782713;
                        }
                    }
                } else {
                    if (input[7] < 0.19140512) {
                        if (input[7] < 0.11807857) {
                            var90 = -0.0015535986;
                        } else {
                            var90 = 0.09681553;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var90 = 0.2276552;
                        } else {
                            var90 = -0.036355734;
                        }
                    }
                }
            } else {
                if (input[7] < -0.04562722) {
                    if (input[0] < -0.29855236) {
                        if (input[6] < -0.65544695) {
                            var90 = 0.019443596;
                        } else {
                            var90 = 0.14871897;
                        }
                    } else {
                        if (input[6] < -1.1428062) {
                            var90 = 0.089781;
                        } else {
                            var90 = -0.10660997;
                        }
                    }
                } else {
                    if (input[7] < 0.7395542) {
                        if (input[2] < -0.24648994) {
                            var90 = -0.032255586;
                        } else {
                            var90 = 0.5570091;
                        }
                    } else {
                        var90 = -0.26775837;
                    }
                }
            }
        } else {
            if (input[1] < -0.25569773) {
                if (input[6] < 0.42797875) {
                    if (input[7] < 0.25839782) {
                        if (input[7] < 0.17264716) {
                            var90 = -0.06730357;
                        } else {
                            var90 = 0.18072328;
                        }
                    } else {
                        if (input[0] < -0.048894748) {
                            var90 = -0.30843836;
                        } else {
                            var90 = -0.011012829;
                        }
                    }
                } else {
                    if (input[0] < -0.34536317) {
                        var90 = -0.31440082;
                    } else {
                        if (input[0] < -0.21273255) {
                            var90 = 0.5911139;
                        } else {
                            var90 = 0.059545763;
                        }
                    }
                }
            } else {
                if (input[7] < 0.3372331) {
                    if (input[7] < 0.25839782) {
                        if (input[3] < -0.31081644) {
                            var90 = -0.0281956;
                        } else {
                            var90 = 0.0005287686;
                        }
                    } else {
                        if (input[4] < -0.06984124) {
                            var90 = -0.16714054;
                        } else {
                            var90 = 0.033525523;
                        }
                    }
                } else {
                    if (input[4] < -0.23893134) {
                        if (input[7] < 1.3185877) {
                            var90 = 0.050946824;
                        } else {
                            var90 = 0.3674095;
                        }
                    } else {
                        if (input[7] < 0.35272354) {
                            var90 = 0.17901617;
                        } else {
                            var90 = -0.018645566;
                        }
                    }
                }
            }
        }
    } else {
        if (input[6] < -0.19405304) {
            if (input[7] < 1.6732836) {
                if (input[1] < -0.4168795) {
                    var90 = 0.0956301;
                } else {
                    if (input[4] < -0.23109274) {
                        if (input[1] < -0.3658726) {
                            var90 = -0.10478146;
                        } else {
                            var90 = -0.22431411;
                        }
                    } else {
                        if (input[1] < -0.25841808) {
                            var90 = 0.1121811;
                        } else {
                            var90 = -0.108599976;
                        }
                    }
                }
            } else {
                if (input[5] < 0.89645296) {
                    if (input[2] < -0.23563433) {
                        if (input[1] < -0.36043188) {
                            var90 = 0.12328551;
                        } else {
                            var90 = -0.0670796;
                        }
                    } else {
                        if (input[1] < -0.41143876) {
                            var90 = -0.15130167;
                        } else {
                            var90 = 0.18711382;
                        }
                    }
                } else {
                    if (input[1] < -0.3332282) {
                        if (input[1] < -0.3726735) {
                            var90 = -0.03719846;
                        } else {
                            var90 = 0.112982035;
                        }
                    } else {
                        if (input[3] < 0.16065814) {
                            var90 = -0.16348876;
                        } else {
                            var90 = 0.035180442;
                        }
                    }
                }
            }
        } else {
            if (input[6] < 0.15899417) {
                if (input[5] < 0.89645296) {
                    if (input[1] < -0.24481624) {
                        if (input[4] < -0.30947888) {
                            var90 = 0.04610911;
                        } else {
                            var90 = 0.32756114;
                        }
                    } else {
                        if (input[2] < -0.18135624) {
                            var90 = 0.02151686;
                        } else {
                            var90 = -0.3330691;
                        }
                    }
                } else {
                    if (input[6] < 0.10888186) {
                        if (input[1] < 0.00817795) {
                            var90 = -0.02156431;
                        } else {
                            var90 = 0.14197694;
                        }
                    } else {
                        if (input[1] < -0.4257207) {
                            var90 = 0.029775882;
                        } else {
                            var90 = 0.49096614;
                        }
                    }
                }
            } else {
                if (input[4] < -0.3733076) {
                    if (input[4] < -0.3777868) {
                        if (input[4] < -0.3856254) {
                            var90 = 0.0021820837;
                        } else {
                            var90 = -0.060001478;
                        }
                    } else {
                        if (input[7] < 2.2242022) {
                            var90 = 0.34157348;
                        } else {
                            var90 = -0.03418405;
                        }
                    }
                } else {
                    if (input[1] < -0.38491517) {
                        if (input[7] < 1.9305356) {
                            var90 = -0.33546;
                        } else {
                            var90 = -0.01663172;
                        }
                    } else {
                        if (input[7] < 1.5558425) {
                            var90 = 0.5046812;
                        } else {
                            var90 = -0.013431939;
                        }
                    }
                }
            }
        }
    }
    var var91;
    if (input[0] < -0.34536317) {
        if (input[4] < -0.0035489667) {
            if (input[4] < -0.2602076) {
                if (input[4] < -0.2646868) {
                    if (input[4] < -0.3324348) {
                        if (input[4] < -0.35427094) {
                            var91 = -0.001575509;
                        } else {
                            var91 = -0.07283079;
                        }
                    } else {
                        if (input[0] < -0.34926406) {
                            var91 = -0.03334596;
                        } else {
                            var91 = 0.059982672;
                        }
                    }
                } else {
                    if (input[6] < -0.28669545) {
                        if (input[0] < -0.34926406) {
                            var91 = -0.06045188;
                        } else {
                            var91 = -0.006077099;
                        }
                    } else {
                        var91 = 0.56784004;
                    }
                }
            } else {
                if (input[7] < 1.1330545) {
                    if (input[7] < 0.6228381) {
                        if (input[1] < 1.1194482) {
                            var91 = -0.058098014;
                        } else {
                            var91 = 0.13426177;
                        }
                    } else {
                        if (input[2] < -0.25191775) {
                            var91 = -0.020198513;
                        } else {
                            var91 = -0.3266582;
                        }
                    }
                } else {
                    if (input[4] < -0.22373404) {
                        if (input[3] < -0.14634857) {
                            var91 = 0.04030264;
                        } else {
                            var91 = -0.1916134;
                        }
                    } else {
                        if (input[1] < -0.265219) {
                            var91 = -0.20176257;
                        } else {
                            var91 = 0.092934355;
                        }
                    }
                }
            }
        } else {
            if (input[4] < 0.037659746) {
                if (input[1] < -0.021746093) {
                    var91 = 0.5544722;
                } else {
                    if (input[4] < 0.020382801) {
                        if (input[1] < 0.20812498) {
                            var91 = 0.029042495;
                        } else {
                            var91 = 0.149605;
                        }
                    } else {
                        if (input[6] < -0.5637625) {
                            var91 = -0.05697334;
                        } else {
                            var91 = -0.01335032;
                        }
                    }
                }
            } else {
                if (input[1] < 0.30197766) {
                    if (input[6] < -0.5849346) {
                        if (input[7] < -0.5640289) {
                            var91 = -0.015450347;
                        } else {
                            var91 = 0.4496859;
                        }
                    } else {
                        if (input[6] < 0.23643003) {
                            var91 = -0.26918378;
                        } else {
                            var91 = 0.059122015;
                        }
                    }
                } else {
                    if (input[1] < 0.40535164) {
                        var91 = 0.5227724;
                    } else {
                        if (input[6] < 0.45249978) {
                            var91 = 0.049298696;
                        } else {
                            var91 = -0.06904307;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.022489617) {
            if (input[1] < -0.22577366) {
                if (input[1] < -0.26249865) {
                    if (input[1] < -0.26997966) {
                        if (input[0] < 0.036925055) {
                            var91 = 0.0015399008;
                        } else {
                            var91 = -0.05137646;
                        }
                    } else {
                        if (input[0] < -0.29855236) {
                            var91 = 0.1057095;
                        } else {
                            var91 = -0.015143622;
                        }
                    }
                } else {
                    if (input[7] < -0.35257557) {
                        if (input[7] < -0.43915075) {
                            var91 = -0.0004141647;
                        } else {
                            var91 = 0.15586269;
                        }
                    } else {
                        if (input[6] < 0.41206968) {
                            var91 = -0.08138563;
                        } else {
                            var91 = 0.09977453;
                        }
                    }
                }
            } else {
                if (input[2] < -0.061944436) {
                    if (input[6] < 0.07775199) {
                        if (input[6] < -0.15998022) {
                            var91 = -0.0017096448;
                        } else {
                            var91 = 0.08141646;
                        }
                    } else {
                        if (input[2] < -0.18135624) {
                            var91 = -0.013344327;
                        } else {
                            var91 = -0.10752315;
                        }
                    }
                } else {
                    if (input[1] < -0.2223732) {
                        if (input[7] < -0.45000497) {
                            var91 = -0.10075948;
                        } else {
                            var91 = 0.6526733;
                        }
                    } else {
                        if (input[7] < 0.81429857) {
                            var91 = 0.03881652;
                        } else {
                            var91 = 0.4197108;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 0.5327999) {
                if (input[7] < 0.3227108) {
                    if (input[7] < 0.19665734) {
                        if (input[7] < 0.19140512) {
                            var91 = -0.0013731581;
                        } else {
                            var91 = 0.20170803;
                        }
                    } else {
                        if (input[4] < -0.011611541) {
                            var91 = 0.2601217;
                        } else {
                            var91 = -0.15418601;
                        }
                    }
                } else {
                    if (input[2] < -0.061944436) {
                        if (input[7] < 0.39379358) {
                            var91 = 0.36017087;
                        } else {
                            var91 = 0.044278234;
                        }
                    } else {
                        if (input[2] < 0.99105054) {
                            var91 = -0.042885214;
                        } else {
                            var91 = 0.05113965;
                        }
                    }
                }
            } else {
                if (input[3] < 0.5170052) {
                    if (input[3] < 0.24289207) {
                        if (input[1] < 0.059864935) {
                            var91 = -0.014170555;
                        } else {
                            var91 = -0.19367419;
                        }
                    } else {
                        if (input[7] < 0.8062492) {
                            var91 = -0.27204904;
                        } else {
                            var91 = -0.102116935;
                        }
                    }
                } else {
                    if (input[1] < 0.5168867) {
                        if (input[1] < 0.15779817) {
                            var91 = -0.08537747;
                        } else {
                            var91 = 0.14237101;
                        }
                    } else {
                        if (input[4] < 0.06453499) {
                            var91 = 0.163246;
                        } else {
                            var91 = -0.0446722;
                        }
                    }
                }
            }
        }
    }
    var var92;
    if (input[4] < -0.2714056) {
        if (input[4] < -0.2863363) {
            if (input[1] < -0.31146526) {
                if (input[1] < -0.33186802) {
                    if (input[1] < -0.3332282) {
                        if (input[1] < -0.3386689) {
                            var92 = -0.00028362405;
                        } else {
                            var92 = 0.0411985;
                        }
                    } else {
                        if (input[6] < -0.013384028) {
                            var92 = -0.06700234;
                        } else {
                            var92 = -0.36984277;
                        }
                    }
                } else {
                    if (input[7] < 0.9725973) {
                        if (input[4] < -0.34307292) {
                            var92 = -0.08751644;
                        } else {
                            var92 = 0.02998305;
                        }
                    } else {
                        if (input[6] < 0.22764193) {
                            var92 = 0.34010828;
                        } else {
                            var92 = 0.049699195;
                        }
                    }
                }
            } else {
                if (input[6] < -0.49229905) {
                    if (input[6] < -0.6802001) {
                        if (input[6] < -0.87364) {
                            var92 = 0.0055316174;
                        } else {
                            var92 = -0.0766723;
                        }
                    } else {
                        if (input[1] < 0.22036663) {
                            var92 = 0.031148221;
                        } else {
                            var92 = 0.3965557;
                        }
                    }
                } else {
                    if (input[4] < -0.32664916) {
                        if (input[0] < -0.34926406) {
                            var92 = 0.23103438;
                        } else {
                            var92 = -0.01712094;
                        }
                    } else {
                        if (input[1] < -0.28834212) {
                            var92 = -0.12494993;
                        } else {
                            var92 = -0.018925585;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 0.2188206) {
                if (input[7] < 0.09761535) {
                    if (input[3] < -0.31081644) {
                        if (input[7] < -0.02155284) {
                            var92 = -0.08937686;
                        } else {
                            var92 = 0.09602973;
                        }
                    } else {
                        if (input[6] < 0.03295901) {
                            var92 = -0.012160146;
                        } else {
                            var92 = 0.12578402;
                        }
                    }
                } else {
                    if (input[1] < -0.34819022) {
                        var92 = 0.6016694;
                    } else {
                        if (input[4] < -0.27812442) {
                            var92 = 0.112074666;
                        } else {
                            var92 = -0.09556887;
                        }
                    }
                }
            } else {
                if (input[7] < 1.3543984) {
                    if (input[4] < -0.2758848) {
                        if (input[2] < -0.23563433) {
                            var92 = -0.33258083;
                        } else {
                            var92 = -0.10643668;
                        }
                    } else {
                        if (input[7] < 0.3372331) {
                            var92 = -0.32354915;
                        } else {
                            var92 = 0.03204191;
                        }
                    }
                } else {
                    if (input[7] < 1.8294723) {
                        if (input[1] < -0.27542037) {
                            var92 = 0.4747901;
                        } else {
                            var92 = -0.07777577;
                        }
                    } else {
                        if (input[1] < -0.22577366) {
                            var92 = -0.16419084;
                        } else {
                            var92 = 0.14091842;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.2602076) {
            if (input[6] < 0.3804174) {
                if (input[6] < 0.14970104) {
                    if (input[6] < 0.066193745) {
                        if (input[1] < -0.30194396) {
                            var92 = 0.18923175;
                        } else {
                            var92 = 0.028779775;
                        }
                    } else {
                        if (input[1] < -0.29514304) {
                            var92 = -0.280614;
                        } else {
                            var92 = 0.00120641;
                        }
                    }
                } else {
                    if (input[6] < 0.16973469) {
                        if (input[0] < -0.21273255) {
                            var92 = 0.25793874;
                        } else {
                            var92 = 0.9407613;
                        }
                    } else {
                        if (input[7] < -0.32756498) {
                            var92 = -0.114339165;
                        } else {
                            var92 = 0.28035745;
                        }
                    }
                }
            } else {
                if (input[6] < 0.62617546) {
                    if (input[7] < 0.29901654) {
                        if (input[0] < -0.21273255) {
                            var92 = -0.018964434;
                        } else {
                            var92 = -0.13908514;
                        }
                    } else {
                        if (input[1] < -0.29514304) {
                            var92 = -0.34709617;
                        } else {
                            var92 = -0.090450816;
                        }
                    }
                } else {
                    if (input[1] < -0.2992236) {
                        var92 = 0.405359;
                    } else {
                        if (input[2] < -0.25191775) {
                            var92 = 0.06687084;
                        } else {
                            var92 = -0.043315317;
                        }
                    }
                }
            }
        } else {
            if (input[7] < 0.39379358) {
                if (input[7] < 0.1638199) {
                    if (input[4] < -0.25460857) {
                        if (input[7] < -0.3457545) {
                            var92 = -0.0064671896;
                        } else {
                            var92 = -0.09794295;
                        }
                    } else {
                        if (input[4] < -0.24194619) {
                            var92 = 0.019671325;
                        } else {
                            var92 = -0.00027305252;
                        }
                    }
                } else {
                    if (input[1] < -0.0027035202) {
                        if (input[1] < -0.20401073) {
                            var92 = -0.043025725;
                        } else {
                            var92 = -0.143523;
                        }
                    } else {
                        if (input[1] < 0.11495238) {
                            var92 = 0.27146205;
                        } else {
                            var92 = -0.013031694;
                        }
                    }
                }
            } else {
                if (input[3] < -0.31081644) {
                    if (input[1] < -0.32914764) {
                        if (input[7] < 0.5327999) {
                            var92 = 0.18542826;
                        } else {
                            var92 = -0.03074914;
                        }
                    } else {
                        if (input[6] < 0.6680634) {
                            var92 = 0.5050049;
                        } else {
                            var92 = -0.13879149;
                        }
                    }
                } else {
                    if (input[6] < -1.3329476) {
                        if (input[1] < -0.32098654) {
                            var92 = 0.4181157;
                        } else {
                            var92 = 0.039489098;
                        }
                    } else {
                        if (input[6] < -0.6382811) {
                            var92 = -0.031446856;
                        } else {
                            var92 = 0.004175128;
                        }
                    }
                }
            }
        }
    }
    var var93;
    if (input[7] < 1.5143926) {
        if (input[7] < 0.11262171) {
            if (input[1] < -0.4168795) {
                if (input[7] < 0.047918946) {
                    if (input[2] < -0.25191775) {
                        if (input[1] < -0.4175596) {
                            var93 = 0.034988835;
                        } else {
                            var93 = 0.28812137;
                        }
                    } else {
                        if (input[1] < -0.41891977) {
                            var93 = -0.010247829;
                        } else {
                            var93 = 0.016427513;
                        }
                    }
                } else {
                    if (input[0] < -0.31805685) {
                        if (input[2] < -0.25191775) {
                            var93 = -0.11620902;
                        } else {
                            var93 = 0.10252722;
                        }
                    } else {
                        if (input[6] < -0.6802001) {
                            var93 = 0.36406705;
                        } else {
                            var93 = 0.10073841;
                        }
                    }
                }
            } else {
                if (input[7] < 0.047918946) {
                    if (input[1] < -0.40259758) {
                        if (input[7] < -0.2175183) {
                            var93 = -0.0023185844;
                        } else {
                            var93 = -0.05819753;
                        }
                    } else {
                        if (input[4] < -0.376667) {
                            var93 = 0.031413842;
                        } else {
                            var93 = -0.00021880759;
                        }
                    }
                } else {
                    if (input[3] < 2.9292006) {
                        if (input[2] < 0.28543535) {
                            var93 = -0.057874195;
                        } else {
                            var93 = 0.4013162;
                        }
                    } else {
                        if (input[1] < 1.473776) {
                            var93 = 0.4462544;
                        } else {
                            var93 = -0.031087644;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.41619942) {
                if (input[7] < 0.3227108) {
                    if (input[7] < 0.19140512) {
                        if (input[1] < -0.42708087) {
                            var93 = -0.106392786;
                        } else {
                            var93 = -0.005051987;
                        }
                    } else {
                        if (input[1] < -0.42844105) {
                            var93 = 0.010441853;
                        } else {
                            var93 = -0.23138751;
                        }
                    }
                } else {
                    if (input[6] < -0.8054629) {
                        if (input[5] < 0.89645296) {
                            var93 = -0.050304886;
                        } else {
                            var93 = -0.20185153;
                        }
                    } else {
                        if (input[6] < -0.013384028) {
                            var93 = 0.025013069;
                        } else {
                            var93 = -0.006607442;
                        }
                    }
                }
            } else {
                if (input[3] < -0.44513187) {
                    if (input[7] < 0.8547546) {
                        if (input[4] < -0.39883906) {
                            var93 = -0.005051213;
                        } else {
                            var93 = 0.509992;
                        }
                    } else {
                        if (input[7] < 1.061024) {
                            var93 = -0.19280769;
                        } else {
                            var93 = 0.011329866;
                        }
                    }
                } else {
                    if (input[4] < -0.39682344) {
                        if (input[6] < -0.19405304) {
                            var93 = 0.032171514;
                        } else {
                            var93 = 0.39862135;
                        }
                    } else {
                        if (input[6] < -0.23778434) {
                            var93 = 0.015573791;
                        } else {
                            var93 = -0.000749621;
                        }
                    }
                }
            }
        }
    } else {
        if (input[1] < -0.398517) {
            if (input[6] < -0.11035498) {
                if (input[4] < -0.40466204) {
                    if (input[7] < 2.2242022) {
                        var93 = 0.14814566;
                    } else {
                        var93 = -0.050060753;
                    }
                } else {
                    if (input[4] < -0.3800264) {
                        if (input[7] < 2.3104768) {
                            var93 = -0.13800617;
                        } else {
                            var93 = -0.022359347;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var93 = 0.22702238;
                        } else {
                            var93 = -0.04694425;
                        }
                    }
                }
            } else {
                if (input[6] < -0.07167272) {
                    if (input[1] < -0.4168795) {
                        if (input[0] < -0.33756137) {
                            var93 = -0.083389744;
                        } else {
                            var93 = 0.016215205;
                        }
                    } else {
                        if (input[2] < -0.20849527) {
                            var93 = 0.4307929;
                        } else {
                            var93 = -0.06990295;
                        }
                    }
                } else {
                    if (input[6] < 0.066193745) {
                        if (input[1] < -0.4168795) {
                            var93 = 0.02394602;
                        } else {
                            var93 = -0.13562939;
                        }
                    } else {
                        if (input[6] < 0.13940509) {
                            var93 = 0.18032987;
                        } else {
                            var93 = 0.0022551077;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.39443648) {
                if (input[7] < 1.8501443) {
                    if (input[2] < -0.23563433) {
                        var93 = -0.2939966;
                    } else {
                        var93 = -0.020495117;
                    }
                } else {
                    if (input[4] < -0.37442738) {
                        if (input[6] < 0.60563) {
                            var93 = -0.2873084;
                        } else {
                            var93 = -0.10144015;
                        }
                    } else {
                        if (input[2] < -0.24648994) {
                            var93 = -0.11420447;
                        } else {
                            var93 = 0.13325605;
                        }
                    }
                }
            } else {
                if (input[1] < -0.3917161) {
                    if (input[7] < 1.8294723) {
                        if (input[6] < 0.18851979) {
                            var93 = -0.28192854;
                        } else {
                            var93 = 0.0316118;
                        }
                    } else {
                        if (input[7] < 2.2242022) {
                            var93 = 0.50672036;
                        } else {
                            var93 = 0.06690732;
                        }
                    }
                } else {
                    if (input[3] < -0.4314262) {
                        if (input[7] < 1.9305356) {
                            var93 = -0.11871923;
                        } else {
                            var93 = 0.24376662;
                        }
                    } else {
                        if (input[1] < -0.38627535) {
                            var93 = -0.14680901;
                        } else {
                            var93 = -0.00799679;
                        }
                    }
                }
            }
        }
    }
    var var94;
    if (input[7] < 3.0238564) {
        if (input[7] < 2.4836273) {
            if (input[7] < -0.5640289) {
                if (input[7] < -0.70629704) {
                    if (input[1] < -0.4148392) {
                        if (input[1] < -0.42232025) {
                            var94 = 0.011211838;
                        } else {
                            var94 = -0.027453566;
                        }
                    } else {
                        if (input[7] < -0.7277347) {
                            var94 = -0.00023157104;
                        } else {
                            var94 = 0.014923059;
                        }
                    }
                } else {
                    if (input[2] < 1.3709972) {
                        if (input[2] < -0.13793376) {
                            var94 = -0.0041213054;
                        } else {
                            var94 = -0.026076263;
                        }
                    } else {
                        if (input[6] < -1.2959688) {
                            var94 = 0.4366737;
                        } else {
                            var94 = 0.021490145;
                        }
                    }
                }
            } else {
                if (input[6] < -1.2959688) {
                    if (input[2] < -0.18135624) {
                        if (input[1] < -0.38491517) {
                            var94 = -0.07202728;
                        } else {
                            var94 = 0.021383006;
                        }
                    } else {
                        if (input[3] < -0.37112132) {
                            var94 = 0.47733864;
                        } else {
                            var94 = 0.04386529;
                        }
                    }
                } else {
                    if (input[6] < -1.2113086) {
                        if (input[1] < -0.10199694) {
                            var94 = 0.060739476;
                        } else {
                            var94 = -0.09107834;
                        }
                    } else {
                        if (input[0] < -0.17372355) {
                            var94 = 0.0020583402;
                        } else {
                            var94 = -0.0031828547;
                        }
                    }
                }
            }
        } else {
            if (input[1] < -0.36043188) {
                if (input[1] < -0.39307627) {
                    if (input[4] < -0.3840257) {
                        if (input[1] < -0.41143876) {
                            var94 = -0.011129555;
                        } else {
                            var94 = -0.23375687;
                        }
                    } else {
                        if (input[4] < -0.37054542) {
                            var94 = 0.0863281;
                        } else {
                            var94 = -0.13509765;
                        }
                    }
                } else {
                    if (input[6] < 0.62617546) {
                        if (input[3] < -0.34371) {
                            var94 = -0.18572097;
                        } else {
                            var94 = -0.0064543104;
                        }
                    } else {
                        if (input[4] < -0.3777868) {
                            var94 = 0.09347524;
                        } else {
                            var94 = 0.015387901;
                        }
                    }
                }
            } else {
                if (input[1] < -0.31418562) {
                    if (input[0] < -0.33756137) {
                        if (input[1] < -0.35499114) {
                            var94 = 0.010890672;
                        } else {
                            var94 = 0.41860312;
                        }
                    } else {
                        if (input[1] < -0.3386689) {
                            var94 = -0.11069456;
                        } else {
                            var94 = 0.028790833;
                        }
                    }
                } else {
                    if (input[4] < -0.2680462) {
                        if (input[2] < -0.25191775) {
                            var94 = 0.0890194;
                        } else {
                            var94 = -0.19759281;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var94 = 0.100331105;
                        } else {
                            var94 = -0.0228952;
                        }
                    }
                }
            }
        }
    } else {
        if (input[3] < 0.5170052) {
            if (input[0] < -0.26734516) {
                if (input[3] < -0.2559938) {
                    if (input[1] < -0.34683004) {
                        if (input[6] < 0.807752) {
                            var94 = 0.036384903;
                        } else {
                            var94 = -0.0067513203;
                        }
                    } else {
                        if (input[0] < -0.33756137) {
                            var94 = -0.08735771;
                        } else {
                            var94 = 0.017830431;
                        }
                    }
                } else {
                    if (input[4] < -0.3324348) {
                        var94 = 0.2004158;
                    } else {
                        if (input[4] < -0.20123135) {
                            var94 = 0.011413976;
                        } else {
                            var94 = 0.09508278;
                        }
                    }
                }
            } else {
                if (input[1] < -0.3658726) {
                    var94 = 0.076826334;
                } else {
                    if (input[0] < -0.12691276) {
                        var94 = -0.100487135;
                    } else {
                        var94 = -0.002144766;
                    }
                }
            }
        } else {
            if (input[1] < 1.3874043) {
                var94 = -0.08715672;
            } else {
                var94 = 0.03878304;
            }
        }
    }
    var var95;
    if (input[4] < -0.2714056) {
        if (input[1] < -0.19040889) {
            if (input[1] < -0.20129035) {
                if (input[1] < -0.23393477) {
                    if (input[1] < -0.31690598) {
                        if (input[1] < -0.3237069) {
                            var95 = -0.00037089674;
                        } else {
                            var95 = 0.037072286;
                        }
                    } else {
                        if (input[7] < 0.29901654) {
                            var95 = 0.009452676;
                        } else {
                            var95 = -0.053541012;
                        }
                    }
                } else {
                    if (input[7] < 0.40215626) {
                        if (input[6] < -0.49068704) {
                            var95 = 0.020574743;
                        } else {
                            var95 = -0.09597111;
                        }
                    } else {
                        if (input[7] < 0.7395542) {
                            var95 = 0.6211188;
                        } else {
                            var95 = -0.106749624;
                        }
                    }
                }
            } else {
                if (input[7] < -0.8277771) {
                    var95 = -0.07492744;
                } else {
                    var95 = 0.33877653;
                }
            }
        } else {
            if (input[1] < -0.15300383) {
                if (input[7] < -0.10175492) {
                    if (input[6] < -1.6475645) {
                        if (input[7] < -0.8641562) {
                            var95 = -0.011563302;
                        } else {
                            var95 = 0.0934916;
                        }
                    } else {
                        if (input[3] < -0.14634857) {
                            var95 = -0.07378631;
                        } else {
                            var95 = 0.019702852;
                        }
                    }
                } else {
                    if (input[6] < -0.013384028) {
                        if (input[3] < -0.34371) {
                            var95 = -0.08874816;
                        } else {
                            var95 = -0.22408034;
                        }
                    } else {
                        if (input[0] < -0.34536317) {
                            var95 = -0.3184641;
                        } else {
                            var95 = 0.10755147;
                        }
                    }
                }
            } else {
                if (input[7] < 2.2242022) {
                    if (input[4] < -0.3324348) {
                        if (input[5] < 0.89645296) {
                            var95 = 0.042219907;
                        } else {
                            var95 = -0.0969337;
                        }
                    } else {
                        if (input[0] < -0.21273255) {
                            var95 = -0.03715674;
                        } else {
                            var95 = 0.0007187064;
                        }
                    }
                } else {
                    if (input[1] < -0.11695896) {
                        var95 = 0.020492293;
                    } else {
                        var95 = 0.32370692;
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.2602076) {
            if (input[7] < 0.3372331) {
                if (input[7] < 0.19665734) {
                    if (input[1] < -0.34410965) {
                        if (input[7] < -0.7413768) {
                            var95 = -0.042352367;
                        } else {
                            var95 = 0.35583866;
                        }
                    } else {
                        if (input[4] < -0.2680462) {
                            var95 = -0.08234363;
                        } else {
                            var95 = 0.03069659;
                        }
                    }
                } else {
                    if (input[1] < -0.29514304) {
                        if (input[0] < -0.26734516) {
                            var95 = 1.3676019;
                        } else {
                            var95 = -0.11353557;
                        }
                    } else {
                        if (input[1] < -0.250257) {
                            var95 = 0.15513614;
                        } else {
                            var95 = -0.020015288;
                        }
                    }
                }
            } else {
                if (input[0] < -0.31805685) {
                    if (input[3] < -0.19568892) {
                        if (input[3] < -0.2559938) {
                            var95 = 0.05381976;
                        } else {
                            var95 = -0.17535254;
                        }
                    } else {
                        if (input[7] < 2.2242022) {
                            var95 = 0.4316246;
                        } else {
                            var95 = -0.04754137;
                        }
                    }
                } else {
                    if (input[2] < -0.18135624) {
                        if (input[6] < -0.5849346) {
                            var95 = 0.06882856;
                        } else {
                            var95 = -0.21434318;
                        }
                    } else {
                        if (input[6] < -0.5125253) {
                            var95 = -0.30892137;
                        } else {
                            var95 = 0.15866199;
                        }
                    }
                }
            }
        } else {
            if (input[0] < -0.33756137) {
                if (input[4] < -0.25050265) {
                    if (input[0] < -0.34926406) {
                        if (input[6] < -1.0206758) {
                            var95 = -0.050523758;
                        } else {
                            var95 = 0.29799595;
                        }
                    } else {
                        if (input[6] < -0.5849346) {
                            var95 = 0.009352524;
                        } else {
                            var95 = -0.24612293;
                        }
                    }
                } else {
                    if (input[1] < 1.1942582) {
                        if (input[1] < 1.1194482) {
                            var95 = -0.0027790633;
                        } else {
                            var95 = 0.29521695;
                        }
                    } else {
                        if (input[7] < 0.19140512) {
                            var95 = 0.025309352;
                        } else {
                            var95 = -0.11345428;
                        }
                    }
                }
            } else {
                if (input[2] < -0.23563433) {
                    if (input[3] < -0.2559938) {
                        if (input[2] < -0.24648994) {
                            var95 = 0.53907925;
                        } else {
                            var95 = -0.04206065;
                        }
                    } else {
                        if (input[4] < -0.25796798) {
                            var95 = 0.16320354;
                        } else {
                            var95 = 0.006104917;
                        }
                    }
                } else {
                    if (input[4] < -0.25796798) {
                        if (input[7] < -0.4276074) {
                            var95 = 0.041376054;
                        } else {
                            var95 = -0.13675846;
                        }
                    } else {
                        if (input[4] < -0.25050265) {
                            var95 = 0.059919264;
                        } else {
                            var95 = -0.0009565007;
                        }
                    }
                }
            }
        }
    }
    var var96;
    if (input[6] < 0.8608831) {
        if (input[7] < -0.5640289) {
            if (input[1] < -0.27542037) {
                if (input[2] < 0.28543535) {
                    if (input[7] < -0.59319484) {
                        if (input[7] < -0.63063467) {
                            var96 = -0.006652277;
                        } else {
                            var96 = 0.04805091;
                        }
                    } else {
                        if (input[1] < -0.4257207) {
                            var96 = 0.19697693;
                        } else {
                            var96 = -0.034975767;
                        }
                    }
                } else {
                    if (input[6] < -0.119936556) {
                        if (input[7] < -0.6151869) {
                            var96 = -0.08969503;
                        } else {
                            var96 = 0.03633467;
                        }
                    } else {
                        if (input[6] < 0.6680634) {
                            var96 = -0.024485463;
                        } else {
                            var96 = 0.0058885086;
                        }
                    }
                }
            } else {
                if (input[1] < -0.265219) {
                    if (input[6] < -1.6299307) {
                        if (input[6] < -1.7269256) {
                            var96 = 0.0022944154;
                        } else {
                            var96 = 0.30609754;
                        }
                    } else {
                        if (input[7] < -0.64198405) {
                            var96 = 0.012548403;
                        } else {
                            var96 = 0.11668242;
                        }
                    }
                } else {
                    if (input[1] < -0.10199694) {
                        if (input[7] < -0.7384535) {
                            var96 = -0.0036387572;
                        } else {
                            var96 = 0.024383428;
                        }
                    } else {
                        if (input[3] < -0.07507915) {
                            var96 = -0.023375235;
                        } else {
                            var96 = -0.00048363357;
                        }
                    }
                }
            }
        } else {
            if (input[2] < -0.20849527) {
                if (input[4] < 1.829343) {
                    if (input[4] < -0.12045629) {
                        if (input[4] < -0.17062342) {
                            var96 = 0.0024183446;
                        } else {
                            var96 = 0.071094476;
                        }
                    } else {
                        if (input[2] < -0.23563433) {
                            var96 = 0.0042173667;
                        } else {
                            var96 = -0.0600611;
                        }
                    }
                } else {
                    if (input[6] < -0.23778434) {
                        if (input[7] < -0.35257557) {
                            var96 = 0.38382134;
                        } else {
                            var96 = 0.056803923;
                        }
                    } else {
                        if (input[6] < 0.39564443) {
                            var96 = -0.12988587;
                        } else {
                            var96 = 0.102327295;
                        }
                    }
                }
            } else {
                if (input[3] < -0.2559938) {
                    if (input[5] < 0.89645296) {
                        if (input[3] < -0.31081644) {
                            var96 = -0.017881518;
                        } else {
                            var96 = -0.107087314;
                        }
                    } else {
                        if (input[1] < -0.25841808) {
                            var96 = -0.006712396;
                        } else {
                            var96 = 0.100696914;
                        }
                    }
                } else {
                    if (input[4] < -0.2646868) {
                        if (input[6] < -0.7894097) {
                            var96 = 0.7947417;
                        } else {
                            var96 = 0.092807606;
                        }
                    } else {
                        if (input[7] < -0.5367446) {
                            var96 = -0.097956605;
                        } else {
                            var96 = 0.007510128;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < 0.48558053) {
            if (input[1] < -0.1632052) {
                if (input[1] < -0.17136632) {
                    if (input[2] < -0.20849527) {
                        if (input[7] < 1.7161589) {
                            var96 = -0.025149921;
                        } else {
                            var96 = 0.01688887;
                        }
                    } else {
                        if (input[6] < 1.0982811) {
                            var96 = 0.04149222;
                        } else {
                            var96 = 0.0018353361;
                        }
                    }
                } else {
                    var96 = -0.17815334;
                }
            } else {
                if (input[1] < -0.11695896) {
                    if (input[6] < 0.9070014) {
                        if (input[1] < -0.13600154) {
                            var96 = 0.70074385;
                        } else {
                            var96 = 0.07491399;
                        }
                    } else {
                        if (input[3] < 0.0784242) {
                            var96 = 0.28734624;
                        } else {
                            var96 = -0.04039382;
                        }
                    }
                } else {
                    if (input[1] < -0.057110872) {
                        if (input[2] < -0.23563433) {
                            var96 = 0.023219679;
                        } else {
                            var96 = -0.10300584;
                        }
                    } else {
                        if (input[7] < 0.5512693) {
                            var96 = 0.010202909;
                        } else {
                            var96 = 0.11264856;
                        }
                    }
                }
            }
        } else {
            if (input[2] < -0.13793376) {
                if (input[1] < 1.1194482) {
                    if (input[2] < -0.23563433) {
                        var96 = -0.06934021;
                    } else {
                        var96 = -0.19411446;
                    }
                } else {
                    if (input[4] < 1.3814222) {
                        if (input[0] < -0.34926406) {
                            var96 = -0.0074942713;
                        } else {
                            var96 = 0.009332746;
                        }
                    } else {
                        if (input[6] < 0.9883007) {
                            var96 = -0.08107123;
                        } else {
                            var96 = -0.022456694;
                        }
                    }
                }
            } else {
                if (input[0] < 0.42701507) {
                    if (input[6] < 1.4832127) {
                        if (input[7] < -0.5640289) {
                            var96 = 0.020313049;
                        } else {
                            var96 = 0.2953377;
                        }
                    } else {
                        if (input[0] < -0.048894748) {
                            var96 = -0.052398153;
                        } else {
                            var96 = 0.009863592;
                        }
                    }
                } else {
                    if (input[6] < 0.9070014) {
                        if (input[1] < 0.20812498) {
                            var96 = -0.055535577;
                        } else {
                            var96 = 0.029221846;
                        }
                    } else {
                        if (input[1] < 3.9649527) {
                            var96 = -0.0013929444;
                        } else {
                            var96 = 0.06925443;
                        }
                    }
                }
            }
        }
    }
    var var97;
    if (input[6] < 1.9575151) {
        if (input[7] < -0.5640289) {
            if (input[1] < -0.27542037) {
                if (input[4] < -0.31171846) {
                    if (input[2] < -0.20849527) {
                        if (input[1] < -0.2992236) {
                            var97 = -0.0076200417;
                        } else {
                            var97 = 0.042436756;
                        }
                    } else {
                        if (input[4] < -0.34157985) {
                            var97 = 0.0026850705;
                        } else {
                            var97 = 0.083050065;
                        }
                    }
                } else {
                    if (input[7] < -0.7413768) {
                        if (input[1] < -0.36859298) {
                            var97 = 0.03843954;
                        } else {
                            var97 = -0.012836624;
                        }
                    } else {
                        if (input[4] < -0.29828084) {
                            var97 = -0.07025039;
                        } else {
                            var97 = -0.01970392;
                        }
                    }
                }
            } else {
                if (input[4] < -0.27409312) {
                    if (input[4] < -0.27812442) {
                        if (input[7] < -0.59319484) {
                            var97 = 0.00084839173;
                        } else {
                            var97 = 0.1083166;
                        }
                    } else {
                        if (input[7] < -0.70629704) {
                            var97 = -0.018059717;
                        } else {
                            var97 = 0.3936608;
                        }
                    }
                } else {
                    if (input[4] < -0.23109274) {
                        if (input[1] < 0.07890751) {
                            var97 = -0.039020926;
                        } else {
                            var97 = 0.028845323;
                        }
                    } else {
                        if (input[3] < -0.14634857) {
                            var97 = 0.02371496;
                        } else {
                            var97 = -0.0005999434;
                        }
                    }
                }
            }
        } else {
            if (input[6] < -1.1231518) {
                if (input[4] < -0.3214234) {
                    if (input[7] < 1.7161589) {
                        if (input[1] < -0.376074) {
                            var97 = -0.0572274;
                        } else {
                            var97 = 0.0011958244;
                        }
                    } else {
                        if (input[0] < -0.31805685) {
                            var97 = 0.019195883;
                        } else {
                            var97 = 0.2554523;
                        }
                    }
                } else {
                    if (input[1] < -0.3991971) {
                        var97 = 0.55816334;
                    } else {
                        if (input[4] < 1.829343) {
                            var97 = 0.020620728;
                        } else {
                            var97 = 0.20635211;
                        }
                    }
                }
            } else {
                if (input[7] < -0.4356645) {
                    if (input[2] < -0.061944436) {
                        if (input[4] < 0.7259647) {
                            var97 = -0.0070241024;
                        } else {
                            var97 = 0.09139505;
                        }
                    } else {
                        if (input[6] < 0.10158316) {
                            var97 = 0.07198024;
                        } else {
                            var97 = -0.02558122;
                        }
                    }
                } else {
                    if (input[7] < -0.3922983) {
                        if (input[4] < 1.055933) {
                            var97 = -0.041833583;
                        } else {
                            var97 = 0.0555654;
                        }
                    } else {
                        if (input[4] < 0.88870925) {
                            var97 = 0.00046733176;
                        } else {
                            var97 = -0.01644925;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.2176551) {
            if (input[4] < -0.24453035) {
                if (input[1] < -0.35363096) {
                    if (input[1] < -0.42844105) {
                        var97 = -0.11351742;
                    } else {
                        if (input[1] < -0.36043188) {
                            var97 = 0.024074474;
                        } else {
                            var97 = 0.08519493;
                        }
                    }
                } else {
                    if (input[1] < -0.15776448) {
                        if (input[4] < -0.36049208) {
                            var97 = 0.017117321;
                        } else {
                            var97 = -0.050893974;
                        }
                    } else {
                        var97 = 0.055243943;
                    }
                }
            } else {
                var97 = 0.12329159;
            }
        } else {
            if (input[3] < 0.62665045) {
                if (input[3] < 0.3525373) {
                    if (input[2] < -0.007666345) {
                        if (input[6] < 1.9835383) {
                            var97 = -0.08140618;
                        } else {
                            var97 = 0.0025198525;
                        }
                    } else {
                        if (input[1] < -0.0027035202) {
                            var97 = 0.0017726185;
                        } else {
                            var97 = 0.0904653;
                        }
                    }
                } else {
                    if (input[1] < 0.30197766) {
                        var97 = 0.29623827;
                    } else {
                        if (input[1] < 0.85625255) {
                            var97 = -0.025089342;
                        } else {
                            var97 = 0.110711776;
                        }
                    }
                }
            } else {
                if (input[0] < 1.3632311) {
                    if (input[1] < 1.1194482) {
                        var97 = -0.06925265;
                    } else {
                        var97 = -0.003619212;
                    }
                } else {
                    if (input[7] < -0.98284286) {
                        if (input[0] < 7.8387256) {
                            var97 = 0.009580055;
                        } else {
                            var97 = -0.01536715;
                        }
                    } else {
                        var97 = -0.0344697;
                    }
                }
            }
        }
    }
    var var98;
    if (input[7] < 1.5832454) {
        if (input[3] < -0.4670609) {
            if (input[7] < 0.29901654) {
                if (input[6] < -0.28669545) {
                    var98 = -0.05634612;
                } else {
                    if (input[6] < 0.39564443) {
                        if (input[7] < -0.5094603) {
                            var98 = -0.007953733;
                        } else {
                            var98 = 0.003668602;
                        }
                    } else {
                        var98 = 0.03126458;
                    }
                }
            } else {
                if (input[6] < 0.5399172) {
                    var98 = -0.10950761;
                } else {
                    var98 = -0.039382484;
                }
            }
        } else {
            if (input[4] < -0.40690163) {
                if (input[6] < -0.28669545) {
                    var98 = 0.35359392;
                } else {
                    if (input[7] < 0.99799716) {
                        if (input[7] < -0.63063467) {
                            var98 = 0.010521794;
                        } else {
                            var98 = -0.084189266;
                        }
                    } else {
                        var98 = 0.19478351;
                    }
                }
            } else {
                if (input[6] < 0.15939334) {
                    if (input[6] < -0.16797942) {
                        if (input[3] < 1.3393445) {
                            var98 = 0.0018236107;
                        } else {
                            var98 = -0.010328667;
                        }
                    } else {
                        if (input[4] < -0.089251146) {
                            var98 = 0.0005470603;
                        } else {
                            var98 = -0.01975239;
                        }
                    }
                } else {
                    if (input[4] < -0.29021826) {
                        if (input[4] < -0.29436153) {
                            var98 = 0.008081341;
                        } else {
                            var98 = 0.37159723;
                        }
                    } else {
                        if (input[4] < -0.280364) {
                            var98 = -0.103582814;
                        } else {
                            var98 = -0.00033355225;
                        }
                    }
                }
            }
        }
    } else {
        if (input[4] < -0.18331452) {
            if (input[4] < -0.23109274) {
                if (input[0] < -0.31805685) {
                    if (input[2] < -0.23563433) {
                        if (input[7] < 1.6732836) {
                            var98 = 0.22357434;
                        } else {
                            var98 = -0.003956338;
                        }
                    } else {
                        if (input[7] < 2.5736654) {
                            var98 = -0.11560469;
                        } else {
                            var98 = 0.030328518;
                        }
                    }
                } else {
                    if (input[3] < -0.31081644) {
                        if (input[1] < -0.30194396) {
                            var98 = 0.01634813;
                        } else {
                            var98 = -0.18867348;
                        }
                    } else {
                        if (input[6] < -0.013384028) {
                            var98 = -0.07567886;
                        } else {
                            var98 = 0.32531452;
                        }
                    }
                }
            } else {
                if (input[7] < 1.9305356) {
                    if (input[1] < -0.31826618) {
                        if (input[0] < -0.21273255) {
                            var98 = -0.1062294;
                        } else {
                            var98 = 0.3393757;
                        }
                    } else {
                        if (input[1] < 0.019059421) {
                            var98 = -0.34815615;
                        } else {
                            var98 = 0.030595137;
                        }
                    }
                } else {
                    if (input[4] < -0.20123135) {
                        if (input[4] < -0.22661352) {
                            var98 = -0.11736017;
                        } else {
                            var98 = 0.037805624;
                        }
                    } else {
                        if (input[1] < -0.2910625) {
                            var98 = -0.013753403;
                        } else {
                            var98 = 0.47702825;
                        }
                    }
                }
            }
        } else {
            if (input[3] < -0.14634857) {
                if (input[1] < -0.07615345) {
                    if (input[0] < -0.29855236) {
                        if (input[0] < -0.34926406) {
                            var98 = 0.045192935;
                        } else {
                            var98 = 0.48831972;
                        }
                    } else {
                        if (input[0] < -0.048894748) {
                            var98 = -0.06448784;
                        } else {
                            var98 = 0.07103548;
                        }
                    }
                } else {
                    var98 = -0.12428859;
                }
            } else {
                if (input[1] < -0.14144227) {
                    if (input[3] < -0.009292) {
                        if (input[6] < 0.6409217) {
                            var98 = 0.23231016;
                        } else {
                            var98 = -0.1366298;
                        }
                    } else {
                        if (input[6] < 0.23643003) {
                            var98 = -0.3702767;
                        } else {
                            var98 = -0.06234816;
                        }
                    }
                } else {
                    if (input[1] < -0.088395104) {
                        if (input[4] < -0.089251146) {
                            var98 = 0.51395017;
                        } else {
                            var98 = -0.05196442;
                        }
                    } else {
                        if (input[2] < -0.24648994) {
                            var98 = 0.044997707;
                        } else {
                            var98 = -0.035266723;
                        }
                    }
                }
            }
        }
    }
    var var99;
    if (input[2] < 0.99105054) {
        if (input[0] < 1.0511591) {
            if (input[4] < 5.2036796) {
                if (input[4] < 1.3814222) {
                    if (input[4] < 1.2170912) {
                        if (input[3] < 3.6418948) {
                            var99 = 0.00014185863;
                        } else {
                            var99 = -0.19394755;
                        }
                    } else {
                        if (input[5] < 0.89645296) {
                            var99 = 0.012756829;
                        } else {
                            var99 = 0.17640373;
                        }
                    }
                } else {
                    if (input[1] < 2.524518) {
                        if (input[2] < 0.16602354) {
                            var99 = -0.07884809;
                        } else {
                            var99 = 0.026467733;
                        }
                    } else {
                        if (input[6] < -0.73580486) {
                            var99 = 0.06400832;
                        } else {
                            var99 = -0.0043474245;
                        }
                    }
                }
            } else {
                if (input[6] < -0.65544695) {
                    var99 = -0.08117147;
                } else {
                    if (input[6] < 0.7829106) {
                        if (input[0] < -0.34536317) {
                            var99 = 0.047301654;
                        } else {
                            var99 = 0.20542778;
                        }
                    } else {
                        var99 = -0.03604281;
                    }
                }
            }
        } else {
            if (input[7] < -0.2809543) {
                if (input[7] < -0.3922983) {
                    if (input[7] < -0.7034) {
                        if (input[4] < 0.19741817) {
                            var99 = 0.030747868;
                        } else {
                            var99 = -0.003432492;
                        }
                    } else {
                        if (input[6] < -1.2959688) {
                            var99 = -0.08828119;
                        } else {
                            var99 = -0.011264805;
                        }
                    }
                } else {
                    if (input[2] < -0.13793376) {
                        if (input[4] < 1.3814222) {
                            var99 = 0.020650242;
                        } else {
                            var99 = 0.16512087;
                        }
                    } else {
                        var99 = -0.112412505;
                    }
                }
            } else {
                if (input[2] < -0.13793376) {
                    if (input[4] < 0.5691924) {
                        if (input[4] < 0.29745382) {
                            var99 = 0.10474598;
                        } else {
                            var99 = -0.1327449;
                        }
                    } else {
                        if (input[3] < 0.62665045) {
                            var99 = 0.6922946;
                        } else {
                            var99 = 0.0013549754;
                        }
                    }
                } else {
                    if (input[0] < 1.3632311) {
                        if (input[4] < 0.7259647) {
                            var99 = -0.12525816;
                        } else {
                            var99 = -0.24849717;
                        }
                    } else {
                        if (input[7] < 0.0038255705) {
                            var99 = -0.08078311;
                        } else {
                            var99 = 0.016640766;
                        }
                    }
                }
            }
        }
    } else {
        if (input[7] < -0.025550095) {
            if (input[7] < -0.17249921) {
                if (input[7] < -0.25253314) {
                    if (input[7] < -0.3457545) {
                        if (input[6] < 0.15939334) {
                            var99 = 0.015210096;
                        } else {
                            var99 = -0.0018812186;
                        }
                    } else {
                        if (input[2] < 1.6966656) {
                            var99 = -0.011967979;
                        } else {
                            var99 = -0.13215226;
                        }
                    }
                } else {
                    if (input[1] < 1.9341983) {
                        if (input[1] < -0.01630536) {
                            var99 = 0.065654814;
                        } else {
                            var99 = 0.1541906;
                        }
                    } else {
                        var99 = -0.050144184;
                    }
                }
            } else {
                if (input[1] < -0.108797856) {
                    var99 = 0.22206546;
                } else {
                    if (input[3] < 2.9292006) {
                        if (input[6] < -1.2113086) {
                            var99 = 0.15129809;
                        } else {
                            var99 = -0.10272365;
                        }
                    } else {
                        if (input[1] < 2.524518) {
                            var99 = 0.2518823;
                        } else {
                            var99 = -0.0561458;
                        }
                    }
                }
            }
        } else {
            if (input[3] < 1.7779255) {
                if (input[2] < 1.1538848) {
                    var99 = 0.33444673;
                } else {
                    if (input[1] < 0.43255532) {
                        if (input[1] < 0.28293508) {
                            var99 = 0.000111244415;
                        } else {
                            var99 = 0.28828636;
                        }
                    } else {
                        if (input[1] < 0.5903366) {
                            var99 = -0.19454555;
                        } else {
                            var99 = 0.014995176;
                        }
                    }
                }
            } else {
                if (input[1] < 1.9341983) {
                    if (input[6] < -0.30643776) {
                        var99 = 0.1562474;
                    } else {
                        var99 = 0.67822605;
                    }
                } else {
                    if (input[6] < 0.3360177) {
                        if (input[1] < 5.0197754) {
                            var99 = -0.18382406;
                        } else {
                            var99 = 0.03958372;
                        }
                    } else {
                        if (input[0] < 1.207195) {
                            var99 = 0.07533035;
                        } else {
                            var99 = 0.003114903;
                        }
                    }
                }
            }
        }
    }
    return 2.152750617761 + (var0 + var1 + var2 + var3 + var4 + var5 + var6 + var7 +
        var8 + var9 + var10 + var11 + var12 + var13 + var14 + var15 + var16 + var17 +
        var18 + var19 + var20 + var21 + var22 + var23 + var24 + var25 + var26 + var27 +
        var28 + var29 + var30 + var31 + var32 + var33 + var34 + var35 + var36 + var37 +
        var38 + var39 + var40 + var41 + var42 + var43 + var44 + var45 + var46 + var47 +
        var48 + var49 + var50 + var51 + var52 + var53 + var54 + var55 + var56 + var57 +
        var58 + var59 + var60 + var61 + var62 + var63 + var64 + var65 + var66 + var67 +
        var68 + var69 + var70 + var71 + var72 + var73 + var74 + var75 + var76 + var77 +
        var78 + var79 + var80 + var81 + var82 + var83 + var84 + var85 + var86 + var87 +
        var88 + var89 + var90 + var91 + var92 + var93 + var94 + var95 + var96 + var97 + var98 + var99);
}
