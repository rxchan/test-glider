import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "package_json": {
                            "table": "sys_module",
                            "id": "9d2a445940bf4d08a3b72f76824013b3"
                        },
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "1ca4bff1c15d4e868effae86d516451b"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "b58dbfceaeba4c859c090ec89b2930f6"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "06244d5f185b49a48df6dea2ada4fd1a"
                        }
                    };
            }
        }
    }
}
