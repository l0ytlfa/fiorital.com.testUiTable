(function (sap) {

	//---> register modul path for library (ABAP stack)
	sap.registerAutomaticallyComponentDependencyPaths = function (componentId,fallback) {
		var url = "/sap/bc/ui2/app_index/ui5_app_info?id=" + componentId;

		return new Promise(function (resolve, reject) {
			$.ajax(url)
				.done(function (data) {
					if (data && data[componentId]) {
						var moduleDefinition = data[componentId];
						moduleDefinition.dependencies.forEach(function (dependency) {
							if (dependency.url) {
								jQuery.sap.registerModulePath(dependency.componentId, dependency.url);
							}
						});
					} else {
						reject(new Error("No app info found for component '" + componentId + "'."));
					}

					resolve();
				})
				.fail(function (error) {
					//---> in SCP call will fail
					fallback();
				});
		});
	};

})(sap);