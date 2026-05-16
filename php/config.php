<?php
declare(strict_types=1);

// SwissFederalRailwaysSbb SDK configuration

class SwissFederalRailwaysSbbConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "SwissFederalRailwaysSbb",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://data.sbb.ch/api/explore/v2.1",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "export" => [],
                    "record" => [],
                ],
            ],
            "entity" => [
        'export' => [
          'fields' => [],
          'name' => 'export',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'exclude',
                        'orig' => 'exclude',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'de',
                        'kind' => 'query',
                        'name' => 'lang',
                        'orig' => 'lang',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine',
                        'orig' => 'refine',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'where',
                        'orig' => 'where',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/catalog/datasets/ist-daten-sbb/exports/json',
                  'parts' => [
                    'catalog',
                    'datasets',
                    'ist-daten-sbb',
                    'exports',
                    'json',
                  ],
                  'select' => [
                    '$action' => 'json',
                    'exist' => [
                      'exclude',
                      'lang',
                      'refine',
                      'where',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => ';',
                        'kind' => 'query',
                        'name' => 'delimiter',
                        'orig' => 'delimiter',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'exclude',
                        'orig' => 'exclude',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'de',
                        'kind' => 'query',
                        'name' => 'lang',
                        'orig' => 'lang',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine',
                        'orig' => 'refine',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'where',
                        'orig' => 'where',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/catalog/datasets/ist-daten-sbb/exports/csv',
                  'parts' => [
                    'catalog',
                    'datasets',
                    'ist-daten-sbb',
                    'exports',
                    'csv',
                  ],
                  'select' => [
                    '$action' => 'csv',
                    'exist' => [
                      'delimiter',
                      'exclude',
                      'lang',
                      'refine',
                      'where',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'record' => [
          'fields' => [
            [
              'name' => 'abfahrtszeit_ist',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'abfahrtszeit_soll',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'ankunftszeit_ist',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'ankunftszeit_soll',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'betreiber_id',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'betreiber_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'betriebstag',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'durchfahrt',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'faellt_aus',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'fahrt_bezeichner',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'haltestellen_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'linien_id',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'linien_text',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'produkt_id',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'verkehrsmittel_text',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 15,
            ],
          ],
          'name' => 'record',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'exclude',
                        'orig' => 'exclude',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'de',
                        'kind' => 'query',
                        'name' => 'lang',
                        'orig' => 'lang',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine',
                        'orig' => 'refine',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'select',
                        'orig' => 'select',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'where',
                        'orig' => 'where',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/catalog/datasets/ist-daten-sbb/records',
                  'parts' => [
                    'catalog',
                    'datasets',
                    'ist-daten-sbb',
                    'records',
                  ],
                  'select' => [
                    'exist' => [
                      'exclude',
                      'lang',
                      'limit',
                      'offset',
                      'order_by',
                      'refine',
                      'select',
                      'where',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return SwissFederalRailwaysSbbFeatures::make_feature($name);
    }
}
