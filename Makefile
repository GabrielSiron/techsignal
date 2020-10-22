clear:
	rm -rf www
	rm -rf builds
	rm -rf plugins
	rm -rf .DS_Store
	rm -rf platforms
	rm -rf .sourcemaps
	rm -rf node_modules/*
	rm -rf package-lock.json
	git checkout -- config.xml
	git checkout -- package.json
	git checkout -- ionic.config.json
